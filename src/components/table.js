import React, { useState } from 'react';
import { tabledata } from '../data/mockTableData'; // Assuming you've moved your data to this file
import { ArrowDownUp, ArrowUpNarrowWide, ArrowUpWideNarrow, CircleChevronLeft, CircleChevronRight, CircleX, X } from 'lucide-react';

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
            <h2 className="text-2xl font-bold text-[#00adf2] mt-8 ml-20">Employee Table</h2>
            <hr className="border-t-1 border-blue-100 mb-8 w-[90%] ml-20" />

            {/* Search Bar and Dialog Button */}
            <div className="mb-2 flex items-center mx-20">
                <div className="relative flex items-center w-full max-w-[600px]">
                    <input
                        type="text"
                        placeholder="Search by Employee Name or ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 w-full border border-gray-300 text-sm placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#00adf2] rounded-md"
                    />
                    <button
                        onClick={handleClearSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-[#00adf2] cursor-pointer"
                    >
                        <X size={20} color="gray" strokeWidth={2} />
                    </button>
                </div>

                <button
                    onClick={toggleDialog}
                    className="p-2 px-3 bg-[#00adf2] text-white border-none cursor-pointer ml-auto rounded-[10px]"
                >
                    Select Columns
                </button>
            </div>


            {/* Column Selection Dialog */}
            {dialogOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-10 rounded-lg w-[450px] max-h-[600px] overflow-y-auto relative z-50">
                        <h3 className="absolute top-2 left-2 p-2 text-gray-600 font-bold">Select Columns to Display</h3>
                        {/* Close button */}
                        <button
                            onClick={toggleDialog}
                            className="absolute top-2 right-2 p-2 text-white bg-transparent border-none cursor-pointer"
                        >
                            <CircleX size={24} color="#00adf2" strokeWidth={2.5} />
                        </button>


                        <div className='mt-7 flex flex-wrap gap-6'>
                            {columns.slice(1).map((col) => (
                                <div key={col.name} className="flex items-center text-gray-800">
                                    <input
                                        type="checkbox"
                                        checked={selectedColumns.find((column) => column.name === col.name)?.visible}
                                        onChange={() => handleColumnToggle(col.name)}
                                        className="w-4 h-4 text-[#00adf2] border-gray-300 mr-2 checked:bg-[#00adf2] checked:border-[#00adf2]"
                                    />
                                    <label className="text-md">{col.name}</label>
                                    {/* Add a comma except for the last item */}
                                    {columns.slice(1).indexOf(col) !== columns.slice(1).length - 1 && <span className="mx-1">,</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}


            <div className="overflow-x-auto max-w-full mx-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200" style={{ width: '90%' }}>
                <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-800">
                    <thead>
                        <tr>
                            {columns.map(
                                (col, index) =>
                                    (index === 0 || selectedColumns.find((column) => column.name === col.name && column.visible)) && (
                                        <th
                                            key={index}
                                            className={`min-w-[130px] p-1 border border-gray-300 ${index === 0 ? 'sticky left-0 z-10' : 'static bg-blue-100 text-gray-600'} bg-blue-100 text-gray-600`}
                                        >
                                            {col.sortable ? (
                                                <>
                                                    {col.name}
                                                    <button
                                                        className="cursor-pointer p-1 border-none bg-transparent"
                                                        onClick={() => handleSort(col.name)}
                                                    >
                                                        {sortColumn === col.name ? (sortDirection === 'asc' ? <ArrowUpNarrowWide size={16} color="#5b5252" /> : <ArrowUpWideNarrow size={16} color="#5b5252" />) : <ArrowDownUp size={14} color="#5b5252" strokeWidth={2.5} />}
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
                                                className={`min-w-[160px] p-1 border border-gray-300  ${colIndex === 0 ? 'sticky left-0 z-10 bg-blue-100 min-w-[200px] pl-4' : 'static bg-transparent'} `}
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
            <div className="my-2.5 flex justify-end items-center space-x-4 text-sm mr-20 text-gray-800">
                {/* Entries per page */}
                <div>
                    <label htmlFor="entriesPerPage" className="mr-4">Entries per page:</label>
                    <select
                        id="entriesPerPage"
                        value={entriesPerPage}
                        onChange={handleEntriesPerPageChange}
                        className="p-1 border border-gray-300 text-xs bg-[aecce4]"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                </div>

                {/* Pagination buttons */}
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-1 cursor-pointer  disabled:opacity-30"
                    >
                        <CircleChevronLeft size={16} color="#00adf2" strokeWidth={2.5} />
                    </button>
                    <span className="text-xs">
                        {currentPage} / {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-1 cursor-pointer  disabled:opacity-30"
                    >
                        <CircleChevronRight size={16} color="#00adf2" strokeWidth={2.5} />
                    </button>
                </div>
            </div>

        </>
    );
};

export default DataTable;
