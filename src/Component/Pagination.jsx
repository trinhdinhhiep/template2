import React from 'react'

const Pagination = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <nav aria-label="Page navigation example">
            <ul className="pagination pagination-circle pg-blue">
                <li className="page-item disabled"><a href='/' className="page-link">First</a></li>
                <li className="page-item disabled">
                    <a href='/' className="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item active"><a href='/' className="page-link">1</a></li>
                <li className="page-item"><a href='/' className="page-link">2</a></li>
                <li className="page-item"><a href='/' className="page-link">3</a></li>
                <li className="page-item"><a href='/' className="page-link">4</a></li>
                <li className="page-item"><a href='/' className="page-link">5</a></li>
                <li className="page-item">
                    <a href='/' className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
                <li className="page-item"><a href='/' className="page-link">Last</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Pagination
