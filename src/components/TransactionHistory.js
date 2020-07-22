import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
                <h3>Transaction History</h3>
                <ul className="list">
                    <li className="plus">
                        Project 1 Income
                        <span>$1.00</span>
                    </li>
                    <li className="minus">
                        Project 2 Income
                        <span>$1.00</span>
                    </li>

                </ul>
        </div>
    )
}
