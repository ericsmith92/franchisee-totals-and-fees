import path from "path"
import fs from "fs/promises"

export async function readFile(){
  try{
    const rawdata = await fs.readFile(path.join(__dirname, '../data/data.json'));
    // @ts-ignore
    const data = JSON.parse(rawdata);
  
    return data
  } catch (err) {
    console.log(err)
  }
}