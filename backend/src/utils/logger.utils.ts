import * as stream from "stream";
import winston, { format } from "winston";
const { printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logConfiguration = {
  transports: [
    new winston.transports.Console({
      level: "info",
      format: format.combine(
        format.timestamp({ format: "HH:mm:ss" }),
        format.colorize(),
        format.simple(),
        myFormat
      ),
    }),
    // new winston.transports.File({ filename: 'combined.log' })
  ],
};

const logger = winston.createLogger(logConfiguration);

/**
 * A writable stream for winston logging.
 */
export const logStream = new stream.Writable({
  write(message: any) {
    logger.info(message.toString());
  },
});

export default logger;
