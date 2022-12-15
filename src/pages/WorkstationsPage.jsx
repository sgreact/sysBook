import React from 'react'
import adminLayout from '../hoc/adminLayout'

const OptionsMenu = (props) => {
  return (
    <div className="dropdown table-action-dropdown">
      <button
        className="btn btn-secondary btn-sm dropdown-toggle"
        type="button"
        id="dropdownMenuButtonSM"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
        <li>
          <a className="dropdown-item" href={() => null}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            &nbsp;Edit
          </a>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <a className="dropdown-item text-danger" href={() => null}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            &nbsp;Delete
          </a>
        </li>
      </ul>
    </div>
  )
}
const WorkstationsPage = (props) => {
  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">Workstations</h5>
          </div>
        </div>
        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>Workstation ID</th>
                <th>Desk Number</th>
                <th>Reserved Status</th>
                <th>Updated On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>WRK-123</strong>
                </td>
                <td>DESK5-TR</td>
                <td>
                  <span className="badge rounded-pill bg-success">
                    Reserved
                  </span>
                </td>
                <td>15-Dec-2022</td>
                <td>
                  <OptionsMenu></OptionsMenu>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>WRK-456</strong>
                </td>
                <td>DESK5-TR2</td>
                <td>
                  <span className="badge rounded-pill bg-danger">
                    Unreserved
                  </span>
                </td>
                <td>15-Dec-2022</td>
                <td>
                  <OptionsMenu></OptionsMenu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          className="table-bottom-center-pagination"
          aria-label="Page navigation example "
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href={() => null} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href={() => null}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href={() => null}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href={() => null}>
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href={() => null} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default adminLayout(WorkstationsPage)
