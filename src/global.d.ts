// Module context for TS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}