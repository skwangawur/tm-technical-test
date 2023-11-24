export interface Data {
    regType: string;
    currentDate: Date;
    seq: number;
}

function generateTemplate(data: Data, template: string) {
    const date = data.currentDate.getDate().toString().padStart(2, "0");
    const month = (data.currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = data.currentDate.getFullYear().toString();
    const regType = data.regType;
    const seq = data.seq.toString().padStart(4, "0");

    return (template = template
        .toUpperCase()
        .replace(/\{|\}/g, "")
        .replace("DD", date)
        .replace("MM", month)
        .replace("YYYY", year)
        .replace("YY", year.slice(-2))
        .replace("SEQ", seq)
        .replace("REG_TYPE", regType));
}

function nurseSchedule(requests: number[], teams: number) {
    const newRequests = [];
    const assignment = [];
    let team = 1;

    for (const key in requests) {
        newRequests.push({ index: key, value: requests[key] });
    }

    newRequests.sort((a, b) => a.value - b.value);

    for (const key in newRequests) {
        const cek = newRequests.filter(
            (obj) => obj.value === newRequests[key].value
        );

        if (team > teams) {
            team = 1;
        }

        assignment[newRequests[key].index] = team;
        team++;
    }

    return assignment;
}

export { generateTemplate, nurseSchedule };
