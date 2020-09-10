export const setProps = (props: { [x: string]: any; }, ctx: { [x: string]: any; }): void => {
  for (const k of Object.keys(props)) {
    ctx[k] = props[k];
  }
}
