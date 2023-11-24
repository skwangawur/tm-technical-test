import { generateTemplate, nurseSchedule } from ".";

describe("trust medis technical test", () => {
    it("should return 0001-2023/01/01-RI", () => {
        const data = {
            regType: "RI",
            currentDate: new Date("01-01-2023"),
            seq: 1,
        };

        const result = generateTemplate(
            data,
            "{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}"
        );

        expect(result).toBe("0001-2023/01/01-RI");
    });

    it("should return RJ/20122023/0001", () => {
        const data = {
            regType: "RJ",
            currentDate: new Date("12-20-2023"),
            seq: 1,
        };

        const result = generateTemplate(data, "{REG_TYPE}/{DDMMYYYY}/{SEQ}");

        expect(result).toBe("RJ/20122023/0001");
    });

    it("should return RI/230101/0001", () => {
        const data = {
            regType: "RI",
            currentDate: new Date("01-01-2023"),
            seq: 1,
        };

        const result = generateTemplate(data, "{REG_TYPE}/{YYMMDD}/{SEQ}");

        expect(result).toBe("RI/230101/0001");
    });

    it("should return [1,2,2,3,1]", () => {
        const requests = [9, 10, 13, 10, 11];
        const teams = 3;

        const result = nurseSchedule(requests, teams);

        expect(result).toEqual([1, 2, 2, 3, 1]);
    });

    it("should return [1, 2, 3, 0, 1]", () => {
        const requests = [9, 10, 10, 10, 11];
        const teams = 3;

        const result = nurseSchedule(requests, teams);
        console.log(result);

        expect(result).toEqual([1, 2, 3, 0, 1]);
    });
});
