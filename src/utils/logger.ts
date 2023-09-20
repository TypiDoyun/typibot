import "colors";

type Log = string | number | boolean | object;

export namespace Logger {
    const timestamp = () => {
        const format = new Intl.DateTimeFormat("ko", {
            dateStyle: "medium",
            timeStyle: "medium"
        }).format;

        const date = new Date();

        return format(date).underline;
    };

    const print = (mode: string, ...logs: Log[]) => {
        process.stdout.write(`[${mode} | ${timestamp()}] `);

        for (const log of logs) {
            if (["string", "number", "boolean"].includes(typeof log)) process.stdout.write(`${log} `);
            else console.log("\n", log);
        }
        console.log();
    };

    export const info = (...logs: Log[]) => {
        print("INFO".green, ...logs);
    }

    export const warn = (...logs: Log[]) => {
        print("WARN!".bgYellow, ...logs);
    }

    export const error = (...logs: Log[]) => {
        print("ERROR!".bgRed, ...logs);
    }
}