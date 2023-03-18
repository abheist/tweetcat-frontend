export default function HomeStats() {
    return <div className="stats shadow w-full">
        <div className="stat">
            <div className="stat-title">Tweets</div>
            <div className="stat-value">75</div>
            <div className="stat-desc text-success">↗︎ 44.2%</div>
        </div>

        <div className="stat">
            <div className="stat-title">Impressions</div>
            <div className="stat-value">168.16K</div>
            <div className="stat-desc text-error">↘︎ 22%</div>
        </div>

        <div className="stat">
            <div className="stat-title">Profile Clicks</div>
            <div className="stat-value">635</div>
            <div className="stat-desc text-error">↘︎ 13.5%</div>
        </div>
        <div className="stat">
            <div className="stat-title">Followers</div>
            <div className="stat-value">15.24K</div>
            <div className="stat-desc text-success">↗︎ 0.4%</div>
        </div>
        <div className="stat">
            <div className="stat-title">Total Likes</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc text-success">↗︎ 14%</div>
        </div>

    </div>;
}
