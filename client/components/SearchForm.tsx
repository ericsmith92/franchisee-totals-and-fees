import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { FRANCHISEE_INPUT_NAME, LOCATION_INPUT_NAME } from "../constants";
import {
  useFranchiseeLazyQuery,
  useSalesFormQuery,
  useSalesLazyQuery,
} from "../generated/graphql";
import SubmitButton from "./common/SubmitButton";
import ComboBox from "./inputs/Combox";
import DatePicker from "./inputs/DatePicker";
import Select from "./inputs/Select";
import TotalsAndFees from "./TotalsAndFees";

interface SelectFormProps {}

const SelectForm: React.FC<SelectFormProps> = (props) => {
  const { data, loading } = useSalesFormQuery();
  const [getSale, { loading: saleLoading, data: saleData }] =
    useSalesLazyQuery();
  const [getFranchisee, { loading: franchiseeLoading, data: franchiseeData }] =
    useFranchiseeLazyQuery();
  const [noResultsMessage, setNoResultsMessage] = React.useState<String>("");

  const cleanLocations = data?.locations?.map((location) => {
    return {
      id: location.id,
      label: location.address,
    };
  });

  const cleanFranchisees = data?.franchisees?.map((franchisee) => {
    return {
      id: franchisee.id,
      label: `${franchisee.first_name} ${franchisee.last_name}`,
    };
  });

  const form = useForm({
    mode: `onSubmit`,
    reValidateMode: `onChange`,
  });

  const { handleSubmit, watch } = form;

  const watchSearchFilter = watch("searchFilter");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const searchFilter = data.searchFilter;
    setNoResultsMessage("");

    try {
      let results;

      if (searchFilter === LOCATION_INPUT_NAME) {
        results = await getSale({
          variables: {
            searchFilter: data.searchFilter,
            date: data.date,
            locationIds: [data.location],
            franchiseeId: data.franchisee,
          },
        });
      }

      if (searchFilter === FRANCHISEE_INPUT_NAME) {
        const franchisee = await getFranchisee({
          variables: { id: data.franchisee },
        });

        const locationIds = franchisee.data?.franchisee?.location_ids;

        results = await getSale({
          variables: {
            searchFilter: data.searchFilter,
            date: data.date,
            locationIds: locationIds,
            franchiseeId: data.franchisee,
          },
        });
      }

      if (!results?.data?.sale?.length) {
        setNoResultsMessage(
          `No reults returned for specified ${watchSearchFilter} on specified date.`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormProvider {...form}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography component="h2" gutterBottom>
            Search
          </Typography>
          <Box mb={1} display="flex">
            <Box mr={1}>
              <Select
                name="searchFilter"
                label="Select Search Filter"
                options={["location", "franchisee"]}
                isRequired
              />
            </Box>
            <DatePicker name="date" />
          </Box>
          {watchSearchFilter === FRANCHISEE_INPUT_NAME && (
            <Box mb={1}>
              <ComboBox
                label="Franchisees"
                name={FRANCHISEE_INPUT_NAME}
                options={cleanFranchisees}
                isRequired
              />
            </Box>
          )}
          {watchSearchFilter === LOCATION_INPUT_NAME && (
            <Box mb={1}>
              <ComboBox
                label="Locations"
                name={LOCATION_INPUT_NAME}
                options={cleanLocations}
                isRequired
              />
            </Box>
          )}
          <SubmitButton
            buttonText="Submit"
            loading={loading || saleLoading || franchiseeLoading}
          />
        </Box>
      </FormProvider>
      {saleData && <TotalsAndFees sales={saleData.sale} />}
      {noResultsMessage && (
        <Typography variant="h6" gutterBottom component="div">
          {noResultsMessage}
        </Typography>
      )}
    </>
  );
};

export default SelectForm;
