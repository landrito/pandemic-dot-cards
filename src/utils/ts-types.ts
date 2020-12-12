// export type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T];

export type RequiredKeys<T> = {
  [K in keyof T]-?: unknown extends Pick<T, K> ? never : K;
}[keyof T];

// export type TupleTypes<T> = { [P in keyof T]: T[P] } extends { [key: number]: infer V } ? V : never;

// export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// export type UnionToTuple<T> = UnionToIntersection<(T extends any ? (t: T) => T : never)> extends (_: any) => infer W
//   ? [...UnionToTuple<Exclude<T, W>>, W]
//   : [];

export type DeepPartial<T> = {
  [k in keyof T]?: T[k] extends Array<infer V>
    ? Array<DeepPartial<V>>
    : DeepPartial<T[k]>;
};
