import React from "react";

export function AutoRetweet() {
    return <div className="card bg-base-100 shadow">
        <div className="card-body">
            <h2 className="card-title">Auto Re-tweets</h2>
            <p>Active</p>
            <div
                className={`border-dashed border-2 border-base-300 rounded-xl min-h-6 px-6 py-6`}>
                <ul className="steps steps-vertical">
                    <li data-content="🐣" className="step step-success">New Tweet</li>
                    <li data-content="♻️" className="step step-success">Auto-retweet 12 hours
                        later
                    </li>
                    <li data-content="♻️" className="step">Auto-retweet 22h later</li>
                    <li data-content="🧹" className="step">Un-retweet 24h later</li>
                </ul>
            </div>
            <div className="card-actions mt-4 text-xs">
                <button className="btn btn-xs btn-outline btn-primary">Edit Automation</button>
            </div>
        </div>
    </div>;
}
