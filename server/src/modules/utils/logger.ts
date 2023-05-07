//define log level type
export type LogLevels = "debug" | "info" | "warn" | "error";

//log level mapper to enable / disable log levels
const levels: { [key in LogLevels]: boolean } = {
  debug: process.env.NODE_ENV !== "production",
  info: true,
  warn: true,
  error: true,
};

//logger function
export function log(level: LogLevels, message: any) {
  //check if level is active
  if (levels[level]) {
    //log if active
    console.log(
      `[${level.toLocaleUpperCase()}] ${new Date().toLocaleTimeString()}`,
      message
    );
  }
}
