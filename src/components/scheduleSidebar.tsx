import {ScheduleEvent} from "@/components/scheduleEvent";

export function ScheduleSidebar() {
    return (
        <div className="space-y-4">
            <h2 className="card-title">Schedule</h2>
            <div>
                <input type="text" placeholder="Type time here in natural language" autoFocus
                       className="input input-bordered input-sm w-full max-w-xs"/>
            </div>
            <div>
                <div className={`sticky top-0 z-10 bg-white py-4 bg-opacity-95`}>
                    <p className={`text-xs font-bold`}>21 March</p>
                    <p className={`text-xs`}>2023</p>
                </div>
                <div className={`space-y-2 relative`}>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                </div>
            </div>
            <div>
                <div className={`sticky top-0 z-10 bg-white py-4 bg-opacity-95`}>
                    <p className={`text-xs font-bold`}>22 March</p>
                    <p className={`text-xs`}>2023</p>
                </div>
                <div className={`space-y-2 relative`}>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                    <ScheduleEvent/>
                </div>
            </div>

        </div>
    )
}
