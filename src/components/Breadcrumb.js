import React from 'react'

export default function Breadcrumb() {
    return (
        <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  My Account
                </li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
    )
}
