import {useEffect, useState} from "react";

const groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export default function useSchedule() {
    const [scheduleItems, setScheduleItems] = useState([]);

    useEffect(() => {
        fetch(`${process.env.GATSBY_API_URL}/schedule-items`)
            .then(response => response.json())
            .then(resultData => {
                resultData = resultData.map(i => {
                    i.dayOrder = i.week_day.Order;
                    i.Time = i.Time.substring(0, 5);
                    return i;
                });

                const groups = groupBy(resultData, 'dayOrder');
                Object.keys(groups).forEach((key) => {
                    groups[key].sort((a,b) => {
                        if (a.Time>b.Time) return 1;
                        if (a.Time<b.Time) return -1;
                        return 0;
                    });
                });

                setScheduleItems(groups);
            })
    }, []);

    return scheduleItems;
}
