interface IExample<firstParam, secondParam> {
  head: firstParam;
  abc: secondParam;
}

const Example: IExample<boolean | string, number | undefined> = {
  head: typeof "phrase" === "string" ? true : "truth",
  abc: typeof 2 === "number" ? 2 : undefined,
};
