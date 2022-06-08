// The second submission -> 1ms, 42.3mb
/*
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> rows = new ArrayList<List<Integer>>();
        List<Integer> row = new ArrayList<Integer>();
        row.add(1);
        
        rows.add(row);
        
        int last = numRows - 1;
        List<Integer> newRow;
        for (int i = 0; i < last; i++) {
            newRow = new ArrayList<Integer>();
            newRow.add(row.get(0));
            for (int j = 1; j < i + 1; j++) {
                newRow.add(row.get(j - 1) + row.get(j));
            }
            newRow.add(row.get(i));

            row = newRow;
            rows.add(row);
        }
        
        return rows;
    }
}
*/

// The third submission -> 0ms, 41.4mb
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> rows = new ArrayList<List<Integer>>(numRows);
        List<Integer> row = new ArrayList<Integer>();
        row.add(1);
        
        rows.add(row);
        
        for (int i = 1; i < numRows; i++) {
            List<Integer> newRow = new ArrayList<Integer>(i + 1);
            newRow.add(1);
            for (int j = 1; j < i; j++) {
                newRow.add(row.get(j - 1) + row.get(j));
            }
            newRow.add(1);

            row = newRow;
            rows.add(row);
        }
        
        return rows;
    }
}