import { parse } from 'csv-parse/sync';
import * as fs from 'fs/promises';

export async function readAndParseFile(filePath: string = './src/input.csv'): Promise<object[]>{

    const entries = await fs.readFile(filePath, 'utf8');

    const records: object[] = parse(
        entries, 
        { columns: true, skip_empty_lines: true,}
    );

    console.log('Parsed ' + records.length + ' records.');
    return records;
}
