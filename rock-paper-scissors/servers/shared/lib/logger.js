const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, simple, label } = format;

const myFormatter = printf(({ level, message, label, timestamp }) => `[${label}] ${timestamp} - ${level}: ${message}`);
const myTimestamp = { format: 'DD/MM/YY HH:mm:ss' };
const myLabel = { label: `${process.ppid}|${process.pid}` };
const formatWithColorize = combine(colorize(), simple(), timestamp(myTimestamp), label(myLabel), myFormatter);
// const formatWithoutColorize = combine(simple(), timestamp(myTimestamp), label(myLabel), myFormatter);

let logger = {};

logger = createLogger({
    level: 'debug',
    exitOnError: false,
    format: combine(
        colorize(),
        simple(),
        timestamp(myTimestamp),
        label(),
        myFormatter
    ),
    transports: [
        new transports.Console({
            format: formatWithColorize
        }),
    ]
});

module.exports = logger;