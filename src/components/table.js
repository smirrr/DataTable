import React, { useState } from 'react';
import { tabledata } from '../data/mockTableData'; // Assuming you've moved your data to this file

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

    return (
        <>
            <h2>Employee Table</h2>

            {/* Search Bar and Dialog Button */}
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Search by Employee Name or ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '8px',
                        width: '100%',
                        maxWidth: '400px',
                        marginRight: '10px',
                    }}
                />
                <button
                    onClick={handleClearSearch}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Clear
                </button>
                <button
                    onClick={toggleDialog}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '10px',
                    }}
                >
                    Select Columns
                </button>
            </div>

            {/* Column Selection Dialog */}
            {dialogOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '300px',
                            maxHeight: '400px',
                            overflowY: 'auto',
                        }}
                    >
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
                            style={{
                                marginTop: '10px',
                                padding: '8px 12px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                <table border="1" cellPadding="8" style={{ tableLayout: 'auto', width: '100%' }}>
                    <thead>
                        <tr>
                            {columns.map(
                                (col, index) =>
                                    index === 0 || selectedColumns.find((column) => column.name === col.name && column.visible) ? (
                                        <th
                                            key={index}
                                            style={{
                                                minWidth: '130px',
                                                padding: '5px',
                                                position: index === 0 ? 'sticky' : 'static',
                                                left: index === 0 ? 0 : 'auto',
                                                background: index === 0 ? '#fff' : 'transparent',
                                                zIndex: index === 0 ? 1 : 'auto',
                                            }}
                                        >
                                            {col.sortable ? (
                                                <button
                                                    style={{ cursor: 'pointer', padding: '5px' }}
                                                    onClick={() => handleSort(col.name)}
                                                >
                                                    {col.name}
                                                    {sortColumn === col.name && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
                                                </button>
                                            ) : (
                                                col.name
                                            )}
                                        </th>
                                    ) : null
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
                                                style={{
                                                    minWidth: '130px',
                                                    padding: '5px',
                                                    position: colIndex === 0 ? 'sticky' : 'static',
                                                    left: colIndex === 0 ? 0 : 'auto',
                                                    background: colIndex === 0 ? '#fff' : 'transparent',
                                                    zIndex: colIndex === 0 ? 1 : 'auto',
                                                }}
                                            >
                                                {row[col.name] !== undefined ? row[col.name] : ''}
                                            </td>
                                        )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="entriesPerPage">Entries per page: </label>
                <select
                    id="entriesPerPage"
                    value={entriesPerPage}
                    onChange={handleEntriesPerPageChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>

                {/* Pagination buttons */}
                <div style={{ marginTop: '10px' }}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span style={{ margin: '0 10px' }}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default DataTable;
