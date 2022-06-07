// The first submission -> 99ms, 43.2mb
function generate(numRows: number): number[][] {
    const rows: number[][] = [];
    let row: number[] = [1];

    rows.push(row);    

    const last: number = numRows - 1;
    let newRow: number[];
    for (let i = 0; i < last; i++) {
        newRow = [row[0]];
        for (let j = 1; j < row.length; j++) {
            newRow.push(row[j - 1] + row[j]);
        }
        newRow.push(row[i]);
        
        row = newRow;
        rows.push(row);
    }
    
    return rows;
};