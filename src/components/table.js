import React, { useState } from 'react';
import { tabledata } from '../data/mockTableData'; // Assuming you've moved your data to this file
import { ArrowDownUp, ArrowUpNarrowWide, ArrowUpWideNarrow } from 'lucide-react';

const DataTable = () => {
    const columns = tabledata.columns;
    const data = tabledata.data;

    // State to manage pagination, sorting, and search
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [sortColumn, setSortColumn] = useState(null); // Column to sort
    const [sortDirection, setSortDirection] = useState('asc'); // Direction of sorting ('asc' or 'desc')
    const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering data
    const [selectedColumns, setSelectedColumns] = useState(columns.map(col => ({ name: col.name, visible: true }))); // To manage visible columns
    const [dialogOpen, setDialogOpen] = useState(false); // State to manage the visibility of the column selection dialog

    // Filter the data based on Employee Name or Employee ID
    const filteredData = data.filter((row) => {
        const employeeName = row['Employee Name'].toLowerCase();
        const employeeId = String(row['Employee ID']);
        const searchQuery = searchTerm.toLowerCase();

        return (
            employeeName.includes(searchQuery) || employeeId.includes(searchQuery)
        );
    });

    // Sort the filtered data if a column is selected for sorting
    let sortedData = [...filteredData];
    if (sortColumn !== null) {
        sortedData = sortedData.sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // Calculate total pages after sorting and filtering
    const totalPages = Math.ceil(sortedData.length / entriesPerPage);

    // Get the current page's data slice after sorting and filtering
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentPageData = sortedData.slice(startIndex, startIndex + entriesPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle entries per page change
    const handleEntriesPerPageChange = (event) => {
        setEntriesPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to the first page when entries per page is changed
    };

    // Handle column sorting
    const handleSort = (columnName) => {
        if (sortColumn === columnName) {
            // Toggle sort direction if the same column is clicked
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            // Set the column to sort by and default to ascending
            setSortColumn(columnName);
            setSortDirection('asc');
        }
    };

    // Handle clear search
    const handleClearSearch = () => {
        setSearchTerm(''); // Clear the search input
        setCurrentPage(1); // Reset to the first page when search is cleared
    };

    // Toggle column visibility
    const handleColumnToggle = (columnName) => {
        setSelectedColumns((prevColumns) =>
            prevColumns.map((col) =>
                col.name === columnName ? { ...col, visible: !col.visible } : col
            )
        );
    };

    // Toggle the column selection dialog
    const toggleDialog = () => {
        setDialogOpen(!dialogOpen);
    };

    const getRandomColor = () => {
        const colors = [
            'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500',
            'bg-purple-500', 'bg-pink-500', 'bg-teal-500', 'bg-indigo-500'
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <>
            <h2>Employee Table</h2>

            {/* Search Bar and Dialog Button */}
            <div className="mb-2 flex items-center">
                <input
                    type="text"
                    placeholder="Search by Employee Name or ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 w-full max-w-[400px] mr-2.5 border border-gray-300"
                />
                <button
                    onClick={handleClearSearch}
                    className="p-2 px-3 bg-red-500 text-white border-none cursor-pointer"
                >
                    Clear
                </button>
                <button
                    onClick={toggleDialog}
                    className="p-2 px-3 bg-green-500 text-white border-none cursor-pointer ml-2.5"
                >
                    Select Columns
                </button>
            </div>

            {/* Column Selection Dialog */}
            {dialogOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg w-[300px] max-h-[400px] overflow-y-auto">
                        <h3>Select Columns to Display</h3>
                        <div>
                            {columns.slice(1).map((col) => (
                                <div key={col.name}>
                                    <input
                                        type="checkbox"
                                        checked={selectedColumns.find((column) => column.name === col.name)?.visible}
                                        onChange={() => handleColumnToggle(col.name)}
                                    />
                                    <label>{col.name}</label>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={toggleDialog}
                            className="mt-2 px-4 py-2 bg-red-500 text-white border-none cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="overflow-x-auto max-w-full">
                <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                        <tr>
                            {columns.map(
                                (col, index) =>
                                    (index === 0 || selectedColumns.find((column) => column.name === col.name && column.visible)) && (
                                        <th
                                            key={index}
                                            className={`min-w-[130px]  p-1 border border-gray-300 ${index === 0 ? 'sticky left-0 bg-white z-10' : 'static bg-transparent'}`}
                                        >
                                            {col.sortable ? (
                                                <>
                                                    {col.name}
                                                    <button
                                                        className="cursor-pointer p-1 border-none bg-transparent"
                                                        onClick={() => handleSort(col.name)}
                                                    >
                                                        {sortColumn === col.name ? (sortDirection === 'asc' ? <ArrowUpNarrowWide size={16} color="blue" /> : <ArrowUpWideNarrow size={16} color="blue" />) : <ArrowDownUp size={16} color="blue" />}
                                                    </button>
                                                </>
                                            ) : (
                                                col.name
                                            )}
                                        </th>
                                    )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map(
                                    (col, colIndex) =>
                                        (colIndex === 0 || selectedColumns.find((column) => column.name === col.name && column.visible)) && (
                                            <td
                                                key={colIndex}
                                                className={` ${col.name === "Employee Name" ? 'min-w-[200px]' : 'min-w-[160px]'} p-1 border border-gray-300 ${colIndex === 0 ? 'sticky left-0 bg-white z-10' : 'static bg-transparent'}`}
                                            >
                                                {col.name === "Employee Name" ? (
                                                    <div className="flex items-center">
                                                        <div className={`w-8 h-8 flex items-center justify-center ${getRandomColor()} text-white rounded-full mr-2`}>
                                                            {/* Display the first letter of the employee's name */}
                                                            {row['Employee Name'][0].toUpperCase()}
                                                        </div>
                                                        {/* Display the full employee name */}
                                                        {row[col.name]}
                                                    </div>
                                                ) : (
                                                    row[col.name] !== undefined ? row[col.name] : ''
                                                )}
                                            </td>
                                        )
                                )}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Pagination controls */}
            <div className="mt-2.5">
                <label htmlFor="entriesPerPage">Entries per page: </label>
                <select
                    id="entriesPerPage"
                    value={entriesPerPage}
                    onChange={handleEntriesPerPageChange}
                    className="p-2 border border-gray-300"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>

                {/* Pagination buttons */}
                <div className="mt-2.5">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 bg-gray-100 cursor-pointer"
                    >
                        Previous
                    </button>
                    <span className="mx-2.5">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 bg-gray-100 cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default DataTable;
