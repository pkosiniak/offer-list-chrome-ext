export type SelectorType = {
   query?: string,
   queryAll?: string,
   getChildren?: boolean,
}

export type selectorKeys =
   'companyName' |
   'companyLocation' |
   'positionName' |
   'positionLevel' |
   'salary' |
   'requirements' |
   'exposeDate';

export type OnCallbackOptions = {
   asArray?: boolean,
   separator?: string,
   removeFalsyElements?: boolean,
}
export type OnCallback = (
   element: Element | null,
) => string;

export type OnAllCallback = (
   list: NodeListOf<Element>,
   getChildren?: boolean,
   options?: OnCallbackOptions
) => string | string[] | string[][] | undefined;

