import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

const excelPath = path.join(process.cwd(), 'Data', 'TestData.xlsx');

export class ExcelUtil {

    static generateRandomRefId(): string {
        return 'StoreID-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    }


    static createOrUpdateExcel() {

        const refId = this.generateRandomRefId();
        const name = 'Test123';
        //const primaryEmailId = 'user@yopmail.com';

        const data = [
            ['refId','name','lob', 'primaryEmailId','secondaryEmailId','gst','line1','line2','city','state','pinCode'],   // Headers
            [refId, name]          // Values
        ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Ensure Data folder exists
        const dataDir = path.join(process.cwd(), 'Data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        XLSX.writeFile(wb, excelPath);

        console.log('Excel created/updated successfully:', excelPath);
        console.log('Generated RefID:', refId);

        return refId; // return if you want to use it in test
    }

    static createPettyCashExcel(refId: string): string {

    const managerEmail = 'newpettycashonly@pcash.com';
    const pccEmail = 'pettycashonly@yopmail.com';

    const data = [
        ['Store ID', 'Manager Email', 'PCC Emails'], // Headers
        [refId, managerEmail, pccEmail]              // Values
    ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Ensure Data folder exists
        const dataDir = path.join(process.cwd(), 'Data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        XLSX.writeFile(wb, excelPath);

        console.log('Excel created/updated successfully:', excelPath);
        console.log('Generated RefID:', refId);

        return refId; // return if you want to use it in test
    }

    static createUtilitiesExcel(refId: string): string {

    const managerEmail = 'newutilitiesonly@utility.com';
    const ucEmail = 'utilitiesonlyemp@yopmail.com';

    const data = [
        ['Store ID', 'Manager Email', 'UC Emails'], // Headers
        [refId, managerEmail, ucEmail]              // Values
    ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Ensure Data folder exists
        const dataDir = path.join(process.cwd(), 'Data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        XLSX.writeFile(wb, excelPath);

        console.log('Excel created/updated successfully:', excelPath);
        console.log('Generated RefID:', refId);

        return refId; // return if you want to use it in test
    }

    static createPCExcelWhenBothEnabled(refId: string): string {

    const managerEmail = 'pettycashandutilities@pu.com';
    const pccEmail = 'newpettyutilitiesemp@yopmail.com';

    const data = [
        ['Store ID', 'Manager Email', 'PCC Emails'], // Headers
        [refId, managerEmail, pccEmail]              // Values
    ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Ensure Data folder exists
        const dataDir = path.join(process.cwd(), 'Data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        XLSX.writeFile(wb, excelPath);

        console.log('Excel created/updated successfully:', excelPath);
        console.log('Generated RefID:', refId);

        return refId; // return if you want to use it in test
    }

    static createUtilitityExcelWhenBothEnabled(refId: string): string {

    const managerEmail = 'pettycashandutilities@pu.com';
    const ucEmail = 'newpettyutilitiesemp@yopmail.com';

    const data = [
        ['Store ID', 'Manager Email', 'UC Emails'], // Headers
        [refId, managerEmail, ucEmail]              // Values
    ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Ensure Data folder exists
        const dataDir = path.join(process.cwd(), 'Data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        XLSX.writeFile(wb, excelPath);

        console.log('Excel created/updated successfully:', excelPath);
        console.log('Generated RefID:', refId);

        return refId; // return if you want to use it in test
    }

    // static readRefId(): string {
    //     const workbook = XLSX.readFile(excelPath);
    //     const sheet = workbook.Sheets['Sheet1'];
    //     return sheet['A2'].v.toString();
    // }

    
}