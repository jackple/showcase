import { createLogger, format, transports } from 'winston'

const { combine, timestamp, prettyPrint } = format

const logger = createLogger({
    level: 'info',
    format: combine(timestamp(), prettyPrint()),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
})

export default logger
