
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ChatReaction
 * 
 */
export type ChatReaction = $Result.DefaultSelection<Prisma.$ChatReactionPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model CountryCode
 * 
 */
export type CountryCode = $Result.DefaultSelection<Prisma.$CountryCodePayload>
/**
 * Model UserContact
 * 
 */
export type UserContact = $Result.DefaultSelection<Prisma.$UserContactPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatReactions
 * const chatReactions = await prisma.chatReaction.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChatReactions
   * const chatReactions = await prisma.chatReaction.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chatReaction`: Exposes CRUD operations for the **ChatReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatReactions
    * const chatReactions = await prisma.chatReaction.findMany()
    * ```
    */
  get chatReaction(): Prisma.ChatReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countryCode`: Exposes CRUD operations for the **CountryCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountryCodes
    * const countryCodes = await prisma.countryCode.findMany()
    * ```
    */
  get countryCode(): Prisma.CountryCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userContact`: Exposes CRUD operations for the **UserContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserContacts
    * const userContacts = await prisma.userContact.findMany()
    * ```
    */
  get userContact(): Prisma.UserContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ChatReaction: 'ChatReaction',
    Chat: 'Chat',
    CountryCode: 'CountryCode',
    UserContact: 'UserContact',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chatReaction" | "chat" | "countryCode" | "userContact" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ChatReaction: {
        payload: Prisma.$ChatReactionPayload<ExtArgs>
        fields: Prisma.ChatReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>
          }
          findFirst: {
            args: Prisma.ChatReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>
          }
          findMany: {
            args: Prisma.ChatReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>[]
          }
          create: {
            args: Prisma.ChatReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>
          }
          createMany: {
            args: Prisma.ChatReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>[]
          }
          delete: {
            args: Prisma.ChatReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>
          }
          update: {
            args: Prisma.ChatReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>
          }
          deleteMany: {
            args: Prisma.ChatReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>[]
          }
          upsert: {
            args: Prisma.ChatReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatReactionPayload>
          }
          aggregate: {
            args: Prisma.ChatReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatReaction>
          }
          groupBy: {
            args: Prisma.ChatReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatReactionCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      CountryCode: {
        payload: Prisma.$CountryCodePayload<ExtArgs>
        fields: Prisma.CountryCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>
          }
          findFirst: {
            args: Prisma.CountryCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>
          }
          findMany: {
            args: Prisma.CountryCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>[]
          }
          create: {
            args: Prisma.CountryCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>
          }
          createMany: {
            args: Prisma.CountryCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>[]
          }
          delete: {
            args: Prisma.CountryCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>
          }
          update: {
            args: Prisma.CountryCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>
          }
          deleteMany: {
            args: Prisma.CountryCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>[]
          }
          upsert: {
            args: Prisma.CountryCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryCodePayload>
          }
          aggregate: {
            args: Prisma.CountryCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountryCode>
          }
          groupBy: {
            args: Prisma.CountryCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCodeCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCodeCountAggregateOutputType> | number
          }
        }
      }
      UserContact: {
        payload: Prisma.$UserContactPayload<ExtArgs>
        fields: Prisma.UserContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          findFirst: {
            args: Prisma.UserContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          findMany: {
            args: Prisma.UserContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>[]
          }
          create: {
            args: Prisma.UserContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          createMany: {
            args: Prisma.UserContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>[]
          }
          delete: {
            args: Prisma.UserContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          update: {
            args: Prisma.UserContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          deleteMany: {
            args: Prisma.UserContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>[]
          }
          upsert: {
            args: Prisma.UserContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          aggregate: {
            args: Prisma.UserContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserContact>
          }
          groupBy: {
            args: Prisma.UserContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserContactCountArgs<ExtArgs>
            result: $Utils.Optional<UserContactCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chatReaction?: ChatReactionOmit
    chat?: ChatOmit
    countryCode?: CountryCodeOmit
    userContact?: UserContactOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    chatReactions: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatReactions?: boolean | ChatCountOutputTypeCountChatReactionsArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountChatReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatReactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    receivedMessages: number
    contacts: number
    linkedContacts: number
    chatReactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    contacts?: boolean | UserCountOutputTypeCountContactsArgs
    linkedContacts?: boolean | UserCountOutputTypeCountLinkedContactsArgs
    chatReactions?: boolean | UserCountOutputTypeCountChatReactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkedContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatReactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ChatReaction
   */

  export type AggregateChatReaction = {
    _count: ChatReactionCountAggregateOutputType | null
    _min: ChatReactionMinAggregateOutputType | null
    _max: ChatReactionMaxAggregateOutputType | null
  }

  export type ChatReactionMinAggregateOutputType = {
    id: string | null
    reactorId: string | null
    messageId: string | null
    emoji: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ChatReactionMaxAggregateOutputType = {
    id: string | null
    reactorId: string | null
    messageId: string | null
    emoji: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ChatReactionCountAggregateOutputType = {
    id: number
    reactorId: number
    messageId: number
    emoji: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type ChatReactionMinAggregateInputType = {
    id?: true
    reactorId?: true
    messageId?: true
    emoji?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ChatReactionMaxAggregateInputType = {
    id?: true
    reactorId?: true
    messageId?: true
    emoji?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ChatReactionCountAggregateInputType = {
    id?: true
    reactorId?: true
    messageId?: true
    emoji?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type ChatReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatReaction to aggregate.
     */
    where?: ChatReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReactions to fetch.
     */
    orderBy?: ChatReactionOrderByWithRelationInput | ChatReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatReactions
    **/
    _count?: true | ChatReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatReactionMaxAggregateInputType
  }

  export type GetChatReactionAggregateType<T extends ChatReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatReaction[P]>
      : GetScalarType<T[P], AggregateChatReaction[P]>
  }




  export type ChatReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatReactionWhereInput
    orderBy?: ChatReactionOrderByWithAggregationInput | ChatReactionOrderByWithAggregationInput[]
    by: ChatReactionScalarFieldEnum[] | ChatReactionScalarFieldEnum
    having?: ChatReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatReactionCountAggregateInputType | true
    _min?: ChatReactionMinAggregateInputType
    _max?: ChatReactionMaxAggregateInputType
  }

  export type ChatReactionGroupByOutputType = {
    id: string
    reactorId: string
    messageId: string
    emoji: string
    isDeleted: boolean
    createdAt: Date
    _count: ChatReactionCountAggregateOutputType | null
    _min: ChatReactionMinAggregateOutputType | null
    _max: ChatReactionMaxAggregateOutputType | null
  }

  type GetChatReactionGroupByPayload<T extends ChatReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatReactionGroupByOutputType[P]>
        }
      >
    >


  export type ChatReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reactorId?: boolean
    messageId?: boolean
    emoji?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    reactor?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatReaction"]>

  export type ChatReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reactorId?: boolean
    messageId?: boolean
    emoji?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    reactor?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatReaction"]>

  export type ChatReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reactorId?: boolean
    messageId?: boolean
    emoji?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    reactor?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatReaction"]>

  export type ChatReactionSelectScalar = {
    id?: boolean
    reactorId?: boolean
    messageId?: boolean
    emoji?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type ChatReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reactorId" | "messageId" | "emoji" | "isDeleted" | "createdAt", ExtArgs["result"]["chatReaction"]>
  export type ChatReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactor?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactor?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactor?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatReaction"
    objects: {
      reactor: Prisma.$UserPayload<ExtArgs>
      message: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reactorId: string
      messageId: string
      emoji: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["chatReaction"]>
    composites: {}
  }

  type ChatReactionGetPayload<S extends boolean | null | undefined | ChatReactionDefaultArgs> = $Result.GetResult<Prisma.$ChatReactionPayload, S>

  type ChatReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatReactionCountAggregateInputType | true
    }

  export interface ChatReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatReaction'], meta: { name: 'ChatReaction' } }
    /**
     * Find zero or one ChatReaction that matches the filter.
     * @param {ChatReactionFindUniqueArgs} args - Arguments to find a ChatReaction
     * @example
     * // Get one ChatReaction
     * const chatReaction = await prisma.chatReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatReactionFindUniqueArgs>(args: SelectSubset<T, ChatReactionFindUniqueArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatReactionFindUniqueOrThrowArgs} args - Arguments to find a ChatReaction
     * @example
     * // Get one ChatReaction
     * const chatReaction = await prisma.chatReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionFindFirstArgs} args - Arguments to find a ChatReaction
     * @example
     * // Get one ChatReaction
     * const chatReaction = await prisma.chatReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatReactionFindFirstArgs>(args?: SelectSubset<T, ChatReactionFindFirstArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionFindFirstOrThrowArgs} args - Arguments to find a ChatReaction
     * @example
     * // Get one ChatReaction
     * const chatReaction = await prisma.chatReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatReactions
     * const chatReactions = await prisma.chatReaction.findMany()
     * 
     * // Get first 10 ChatReactions
     * const chatReactions = await prisma.chatReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatReactionWithIdOnly = await prisma.chatReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatReactionFindManyArgs>(args?: SelectSubset<T, ChatReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatReaction.
     * @param {ChatReactionCreateArgs} args - Arguments to create a ChatReaction.
     * @example
     * // Create one ChatReaction
     * const ChatReaction = await prisma.chatReaction.create({
     *   data: {
     *     // ... data to create a ChatReaction
     *   }
     * })
     * 
     */
    create<T extends ChatReactionCreateArgs>(args: SelectSubset<T, ChatReactionCreateArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatReactions.
     * @param {ChatReactionCreateManyArgs} args - Arguments to create many ChatReactions.
     * @example
     * // Create many ChatReactions
     * const chatReaction = await prisma.chatReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatReactionCreateManyArgs>(args?: SelectSubset<T, ChatReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatReactions and returns the data saved in the database.
     * @param {ChatReactionCreateManyAndReturnArgs} args - Arguments to create many ChatReactions.
     * @example
     * // Create many ChatReactions
     * const chatReaction = await prisma.chatReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatReactions and only return the `id`
     * const chatReactionWithIdOnly = await prisma.chatReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatReaction.
     * @param {ChatReactionDeleteArgs} args - Arguments to delete one ChatReaction.
     * @example
     * // Delete one ChatReaction
     * const ChatReaction = await prisma.chatReaction.delete({
     *   where: {
     *     // ... filter to delete one ChatReaction
     *   }
     * })
     * 
     */
    delete<T extends ChatReactionDeleteArgs>(args: SelectSubset<T, ChatReactionDeleteArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatReaction.
     * @param {ChatReactionUpdateArgs} args - Arguments to update one ChatReaction.
     * @example
     * // Update one ChatReaction
     * const chatReaction = await prisma.chatReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatReactionUpdateArgs>(args: SelectSubset<T, ChatReactionUpdateArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatReactions.
     * @param {ChatReactionDeleteManyArgs} args - Arguments to filter ChatReactions to delete.
     * @example
     * // Delete a few ChatReactions
     * const { count } = await prisma.chatReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatReactionDeleteManyArgs>(args?: SelectSubset<T, ChatReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatReactions
     * const chatReaction = await prisma.chatReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatReactionUpdateManyArgs>(args: SelectSubset<T, ChatReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatReactions and returns the data updated in the database.
     * @param {ChatReactionUpdateManyAndReturnArgs} args - Arguments to update many ChatReactions.
     * @example
     * // Update many ChatReactions
     * const chatReaction = await prisma.chatReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatReactions and only return the `id`
     * const chatReactionWithIdOnly = await prisma.chatReaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatReaction.
     * @param {ChatReactionUpsertArgs} args - Arguments to update or create a ChatReaction.
     * @example
     * // Update or create a ChatReaction
     * const chatReaction = await prisma.chatReaction.upsert({
     *   create: {
     *     // ... data to create a ChatReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatReaction we want to update
     *   }
     * })
     */
    upsert<T extends ChatReactionUpsertArgs>(args: SelectSubset<T, ChatReactionUpsertArgs<ExtArgs>>): Prisma__ChatReactionClient<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionCountArgs} args - Arguments to filter ChatReactions to count.
     * @example
     * // Count the number of ChatReactions
     * const count = await prisma.chatReaction.count({
     *   where: {
     *     // ... the filter for the ChatReactions we want to count
     *   }
     * })
    **/
    count<T extends ChatReactionCountArgs>(
      args?: Subset<T, ChatReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatReactionAggregateArgs>(args: Subset<T, ChatReactionAggregateArgs>): Prisma.PrismaPromise<GetChatReactionAggregateType<T>>

    /**
     * Group by ChatReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatReactionGroupByArgs['orderBy'] }
        : { orderBy?: ChatReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatReaction model
   */
  readonly fields: ChatReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reactor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatReaction model
   */
  interface ChatReactionFieldRefs {
    readonly id: FieldRef<"ChatReaction", 'String'>
    readonly reactorId: FieldRef<"ChatReaction", 'String'>
    readonly messageId: FieldRef<"ChatReaction", 'String'>
    readonly emoji: FieldRef<"ChatReaction", 'String'>
    readonly isDeleted: FieldRef<"ChatReaction", 'Boolean'>
    readonly createdAt: FieldRef<"ChatReaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatReaction findUnique
   */
  export type ChatReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * Filter, which ChatReaction to fetch.
     */
    where: ChatReactionWhereUniqueInput
  }

  /**
   * ChatReaction findUniqueOrThrow
   */
  export type ChatReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * Filter, which ChatReaction to fetch.
     */
    where: ChatReactionWhereUniqueInput
  }

  /**
   * ChatReaction findFirst
   */
  export type ChatReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * Filter, which ChatReaction to fetch.
     */
    where?: ChatReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReactions to fetch.
     */
    orderBy?: ChatReactionOrderByWithRelationInput | ChatReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatReactions.
     */
    cursor?: ChatReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatReactions.
     */
    distinct?: ChatReactionScalarFieldEnum | ChatReactionScalarFieldEnum[]
  }

  /**
   * ChatReaction findFirstOrThrow
   */
  export type ChatReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * Filter, which ChatReaction to fetch.
     */
    where?: ChatReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReactions to fetch.
     */
    orderBy?: ChatReactionOrderByWithRelationInput | ChatReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatReactions.
     */
    cursor?: ChatReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatReactions.
     */
    distinct?: ChatReactionScalarFieldEnum | ChatReactionScalarFieldEnum[]
  }

  /**
   * ChatReaction findMany
   */
  export type ChatReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * Filter, which ChatReactions to fetch.
     */
    where?: ChatReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatReactions to fetch.
     */
    orderBy?: ChatReactionOrderByWithRelationInput | ChatReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatReactions.
     */
    cursor?: ChatReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatReactions.
     */
    skip?: number
    distinct?: ChatReactionScalarFieldEnum | ChatReactionScalarFieldEnum[]
  }

  /**
   * ChatReaction create
   */
  export type ChatReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatReaction.
     */
    data: XOR<ChatReactionCreateInput, ChatReactionUncheckedCreateInput>
  }

  /**
   * ChatReaction createMany
   */
  export type ChatReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatReactions.
     */
    data: ChatReactionCreateManyInput | ChatReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatReaction createManyAndReturn
   */
  export type ChatReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatReactions.
     */
    data: ChatReactionCreateManyInput | ChatReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatReaction update
   */
  export type ChatReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatReaction.
     */
    data: XOR<ChatReactionUpdateInput, ChatReactionUncheckedUpdateInput>
    /**
     * Choose, which ChatReaction to update.
     */
    where: ChatReactionWhereUniqueInput
  }

  /**
   * ChatReaction updateMany
   */
  export type ChatReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatReactions.
     */
    data: XOR<ChatReactionUpdateManyMutationInput, ChatReactionUncheckedUpdateManyInput>
    /**
     * Filter which ChatReactions to update
     */
    where?: ChatReactionWhereInput
    /**
     * Limit how many ChatReactions to update.
     */
    limit?: number
  }

  /**
   * ChatReaction updateManyAndReturn
   */
  export type ChatReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * The data used to update ChatReactions.
     */
    data: XOR<ChatReactionUpdateManyMutationInput, ChatReactionUncheckedUpdateManyInput>
    /**
     * Filter which ChatReactions to update
     */
    where?: ChatReactionWhereInput
    /**
     * Limit how many ChatReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatReaction upsert
   */
  export type ChatReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatReaction to update in case it exists.
     */
    where: ChatReactionWhereUniqueInput
    /**
     * In case the ChatReaction found by the `where` argument doesn't exist, create a new ChatReaction with this data.
     */
    create: XOR<ChatReactionCreateInput, ChatReactionUncheckedCreateInput>
    /**
     * In case the ChatReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatReactionUpdateInput, ChatReactionUncheckedUpdateInput>
  }

  /**
   * ChatReaction delete
   */
  export type ChatReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    /**
     * Filter which ChatReaction to delete.
     */
    where: ChatReactionWhereUniqueInput
  }

  /**
   * ChatReaction deleteMany
   */
  export type ChatReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatReactions to delete
     */
    where?: ChatReactionWhereInput
    /**
     * Limit how many ChatReactions to delete.
     */
    limit?: number
  }

  /**
   * ChatReaction without action
   */
  export type ChatReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    receiverId: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    content: JsonValue
    senderId: string
    receiverId: string
    isDeleted: boolean
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    chatReactions?: boolean | Chat$chatReactionsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "receiverId" | "isDeleted" | "createdAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    chatReactions?: boolean | Chat$chatReactionsArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      chatReactions: Prisma.$ChatReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: Prisma.JsonValue
      senderId: string
      receiverId: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatReactions<T extends Chat$chatReactionsArgs<ExtArgs> = {}>(args?: Subset<T, Chat$chatReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly content: FieldRef<"Chat", 'Json'>
    readonly senderId: FieldRef<"Chat", 'String'>
    readonly receiverId: FieldRef<"Chat", 'String'>
    readonly isDeleted: FieldRef<"Chat", 'Boolean'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.chatReactions
   */
  export type Chat$chatReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    where?: ChatReactionWhereInput
    orderBy?: ChatReactionOrderByWithRelationInput | ChatReactionOrderByWithRelationInput[]
    cursor?: ChatReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatReactionScalarFieldEnum | ChatReactionScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model CountryCode
   */

  export type AggregateCountryCode = {
    _count: CountryCodeCountAggregateOutputType | null
    _avg: CountryCodeAvgAggregateOutputType | null
    _sum: CountryCodeSumAggregateOutputType | null
    _min: CountryCodeMinAggregateOutputType | null
    _max: CountryCodeMaxAggregateOutputType | null
  }

  export type CountryCodeAvgAggregateOutputType = {
    id: number | null
  }

  export type CountryCodeSumAggregateOutputType = {
    id: number | null
  }

  export type CountryCodeMinAggregateOutputType = {
    id: number | null
    countryName: string | null
    countryCode: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type CountryCodeMaxAggregateOutputType = {
    id: number | null
    countryName: string | null
    countryCode: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type CountryCodeCountAggregateOutputType = {
    id: number
    countryName: number
    countryCode: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type CountryCodeAvgAggregateInputType = {
    id?: true
  }

  export type CountryCodeSumAggregateInputType = {
    id?: true
  }

  export type CountryCodeMinAggregateInputType = {
    id?: true
    countryName?: true
    countryCode?: true
    isDeleted?: true
    createdAt?: true
  }

  export type CountryCodeMaxAggregateInputType = {
    id?: true
    countryName?: true
    countryCode?: true
    isDeleted?: true
    createdAt?: true
  }

  export type CountryCodeCountAggregateInputType = {
    id?: true
    countryName?: true
    countryCode?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type CountryCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryCode to aggregate.
     */
    where?: CountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryCodes to fetch.
     */
    orderBy?: CountryCodeOrderByWithRelationInput | CountryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountryCodes
    **/
    _count?: true | CountryCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountryCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryCodeMaxAggregateInputType
  }

  export type GetCountryCodeAggregateType<T extends CountryCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateCountryCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountryCode[P]>
      : GetScalarType<T[P], AggregateCountryCode[P]>
  }




  export type CountryCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryCodeWhereInput
    orderBy?: CountryCodeOrderByWithAggregationInput | CountryCodeOrderByWithAggregationInput[]
    by: CountryCodeScalarFieldEnum[] | CountryCodeScalarFieldEnum
    having?: CountryCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCodeCountAggregateInputType | true
    _avg?: CountryCodeAvgAggregateInputType
    _sum?: CountryCodeSumAggregateInputType
    _min?: CountryCodeMinAggregateInputType
    _max?: CountryCodeMaxAggregateInputType
  }

  export type CountryCodeGroupByOutputType = {
    id: number
    countryName: string
    countryCode: string
    isDeleted: boolean
    createdAt: Date
    _count: CountryCodeCountAggregateOutputType | null
    _avg: CountryCodeAvgAggregateOutputType | null
    _sum: CountryCodeSumAggregateOutputType | null
    _min: CountryCodeMinAggregateOutputType | null
    _max: CountryCodeMaxAggregateOutputType | null
  }

  type GetCountryCodeGroupByPayload<T extends CountryCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryCodeGroupByOutputType[P]>
            : GetScalarType<T[P], CountryCodeGroupByOutputType[P]>
        }
      >
    >


  export type CountryCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryName?: boolean
    countryCode?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["countryCode"]>

  export type CountryCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryName?: boolean
    countryCode?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["countryCode"]>

  export type CountryCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryName?: boolean
    countryCode?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["countryCode"]>

  export type CountryCodeSelectScalar = {
    id?: boolean
    countryName?: boolean
    countryCode?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type CountryCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryName" | "countryCode" | "isDeleted" | "createdAt", ExtArgs["result"]["countryCode"]>

  export type $CountryCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountryCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      countryName: string
      countryCode: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["countryCode"]>
    composites: {}
  }

  type CountryCodeGetPayload<S extends boolean | null | undefined | CountryCodeDefaultArgs> = $Result.GetResult<Prisma.$CountryCodePayload, S>

  type CountryCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCodeCountAggregateInputType | true
    }

  export interface CountryCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountryCode'], meta: { name: 'CountryCode' } }
    /**
     * Find zero or one CountryCode that matches the filter.
     * @param {CountryCodeFindUniqueArgs} args - Arguments to find a CountryCode
     * @example
     * // Get one CountryCode
     * const countryCode = await prisma.countryCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryCodeFindUniqueArgs>(args: SelectSubset<T, CountryCodeFindUniqueArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CountryCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryCodeFindUniqueOrThrowArgs} args - Arguments to find a CountryCode
     * @example
     * // Get one CountryCode
     * const countryCode = await prisma.countryCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeFindFirstArgs} args - Arguments to find a CountryCode
     * @example
     * // Get one CountryCode
     * const countryCode = await prisma.countryCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryCodeFindFirstArgs>(args?: SelectSubset<T, CountryCodeFindFirstArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeFindFirstOrThrowArgs} args - Arguments to find a CountryCode
     * @example
     * // Get one CountryCode
     * const countryCode = await prisma.countryCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CountryCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryCodes
     * const countryCodes = await prisma.countryCode.findMany()
     * 
     * // Get first 10 CountryCodes
     * const countryCodes = await prisma.countryCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryCodeWithIdOnly = await prisma.countryCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryCodeFindManyArgs>(args?: SelectSubset<T, CountryCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CountryCode.
     * @param {CountryCodeCreateArgs} args - Arguments to create a CountryCode.
     * @example
     * // Create one CountryCode
     * const CountryCode = await prisma.countryCode.create({
     *   data: {
     *     // ... data to create a CountryCode
     *   }
     * })
     * 
     */
    create<T extends CountryCodeCreateArgs>(args: SelectSubset<T, CountryCodeCreateArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CountryCodes.
     * @param {CountryCodeCreateManyArgs} args - Arguments to create many CountryCodes.
     * @example
     * // Create many CountryCodes
     * const countryCode = await prisma.countryCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCodeCreateManyArgs>(args?: SelectSubset<T, CountryCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CountryCodes and returns the data saved in the database.
     * @param {CountryCodeCreateManyAndReturnArgs} args - Arguments to create many CountryCodes.
     * @example
     * // Create many CountryCodes
     * const countryCode = await prisma.countryCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CountryCodes and only return the `id`
     * const countryCodeWithIdOnly = await prisma.countryCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CountryCode.
     * @param {CountryCodeDeleteArgs} args - Arguments to delete one CountryCode.
     * @example
     * // Delete one CountryCode
     * const CountryCode = await prisma.countryCode.delete({
     *   where: {
     *     // ... filter to delete one CountryCode
     *   }
     * })
     * 
     */
    delete<T extends CountryCodeDeleteArgs>(args: SelectSubset<T, CountryCodeDeleteArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CountryCode.
     * @param {CountryCodeUpdateArgs} args - Arguments to update one CountryCode.
     * @example
     * // Update one CountryCode
     * const countryCode = await prisma.countryCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryCodeUpdateArgs>(args: SelectSubset<T, CountryCodeUpdateArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CountryCodes.
     * @param {CountryCodeDeleteManyArgs} args - Arguments to filter CountryCodes to delete.
     * @example
     * // Delete a few CountryCodes
     * const { count } = await prisma.countryCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryCodeDeleteManyArgs>(args?: SelectSubset<T, CountryCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryCodes
     * const countryCode = await prisma.countryCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryCodeUpdateManyArgs>(args: SelectSubset<T, CountryCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryCodes and returns the data updated in the database.
     * @param {CountryCodeUpdateManyAndReturnArgs} args - Arguments to update many CountryCodes.
     * @example
     * // Update many CountryCodes
     * const countryCode = await prisma.countryCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CountryCodes and only return the `id`
     * const countryCodeWithIdOnly = await prisma.countryCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CountryCode.
     * @param {CountryCodeUpsertArgs} args - Arguments to update or create a CountryCode.
     * @example
     * // Update or create a CountryCode
     * const countryCode = await prisma.countryCode.upsert({
     *   create: {
     *     // ... data to create a CountryCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryCode we want to update
     *   }
     * })
     */
    upsert<T extends CountryCodeUpsertArgs>(args: SelectSubset<T, CountryCodeUpsertArgs<ExtArgs>>): Prisma__CountryCodeClient<$Result.GetResult<Prisma.$CountryCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CountryCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeCountArgs} args - Arguments to filter CountryCodes to count.
     * @example
     * // Count the number of CountryCodes
     * const count = await prisma.countryCode.count({
     *   where: {
     *     // ... the filter for the CountryCodes we want to count
     *   }
     * })
    **/
    count<T extends CountryCodeCountArgs>(
      args?: Subset<T, CountryCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountryCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryCodeAggregateArgs>(args: Subset<T, CountryCodeAggregateArgs>): Prisma.PrismaPromise<GetCountryCodeAggregateType<T>>

    /**
     * Group by CountryCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryCodeGroupByArgs['orderBy'] }
        : { orderBy?: CountryCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountryCode model
   */
  readonly fields: CountryCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountryCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CountryCode model
   */
  interface CountryCodeFieldRefs {
    readonly id: FieldRef<"CountryCode", 'Int'>
    readonly countryName: FieldRef<"CountryCode", 'String'>
    readonly countryCode: FieldRef<"CountryCode", 'String'>
    readonly isDeleted: FieldRef<"CountryCode", 'Boolean'>
    readonly createdAt: FieldRef<"CountryCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CountryCode findUnique
   */
  export type CountryCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * Filter, which CountryCode to fetch.
     */
    where: CountryCodeWhereUniqueInput
  }

  /**
   * CountryCode findUniqueOrThrow
   */
  export type CountryCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * Filter, which CountryCode to fetch.
     */
    where: CountryCodeWhereUniqueInput
  }

  /**
   * CountryCode findFirst
   */
  export type CountryCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * Filter, which CountryCode to fetch.
     */
    where?: CountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryCodes to fetch.
     */
    orderBy?: CountryCodeOrderByWithRelationInput | CountryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryCodes.
     */
    cursor?: CountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryCodes.
     */
    distinct?: CountryCodeScalarFieldEnum | CountryCodeScalarFieldEnum[]
  }

  /**
   * CountryCode findFirstOrThrow
   */
  export type CountryCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * Filter, which CountryCode to fetch.
     */
    where?: CountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryCodes to fetch.
     */
    orderBy?: CountryCodeOrderByWithRelationInput | CountryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryCodes.
     */
    cursor?: CountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryCodes.
     */
    distinct?: CountryCodeScalarFieldEnum | CountryCodeScalarFieldEnum[]
  }

  /**
   * CountryCode findMany
   */
  export type CountryCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * Filter, which CountryCodes to fetch.
     */
    where?: CountryCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryCodes to fetch.
     */
    orderBy?: CountryCodeOrderByWithRelationInput | CountryCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountryCodes.
     */
    cursor?: CountryCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryCodes.
     */
    skip?: number
    distinct?: CountryCodeScalarFieldEnum | CountryCodeScalarFieldEnum[]
  }

  /**
   * CountryCode create
   */
  export type CountryCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a CountryCode.
     */
    data: XOR<CountryCodeCreateInput, CountryCodeUncheckedCreateInput>
  }

  /**
   * CountryCode createMany
   */
  export type CountryCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryCodes.
     */
    data: CountryCodeCreateManyInput | CountryCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryCode createManyAndReturn
   */
  export type CountryCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * The data used to create many CountryCodes.
     */
    data: CountryCodeCreateManyInput | CountryCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryCode update
   */
  export type CountryCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a CountryCode.
     */
    data: XOR<CountryCodeUpdateInput, CountryCodeUncheckedUpdateInput>
    /**
     * Choose, which CountryCode to update.
     */
    where: CountryCodeWhereUniqueInput
  }

  /**
   * CountryCode updateMany
   */
  export type CountryCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryCodes.
     */
    data: XOR<CountryCodeUpdateManyMutationInput, CountryCodeUncheckedUpdateManyInput>
    /**
     * Filter which CountryCodes to update
     */
    where?: CountryCodeWhereInput
    /**
     * Limit how many CountryCodes to update.
     */
    limit?: number
  }

  /**
   * CountryCode updateManyAndReturn
   */
  export type CountryCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * The data used to update CountryCodes.
     */
    data: XOR<CountryCodeUpdateManyMutationInput, CountryCodeUncheckedUpdateManyInput>
    /**
     * Filter which CountryCodes to update
     */
    where?: CountryCodeWhereInput
    /**
     * Limit how many CountryCodes to update.
     */
    limit?: number
  }

  /**
   * CountryCode upsert
   */
  export type CountryCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the CountryCode to update in case it exists.
     */
    where: CountryCodeWhereUniqueInput
    /**
     * In case the CountryCode found by the `where` argument doesn't exist, create a new CountryCode with this data.
     */
    create: XOR<CountryCodeCreateInput, CountryCodeUncheckedCreateInput>
    /**
     * In case the CountryCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryCodeUpdateInput, CountryCodeUncheckedUpdateInput>
  }

  /**
   * CountryCode delete
   */
  export type CountryCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
    /**
     * Filter which CountryCode to delete.
     */
    where: CountryCodeWhereUniqueInput
  }

  /**
   * CountryCode deleteMany
   */
  export type CountryCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryCodes to delete
     */
    where?: CountryCodeWhereInput
    /**
     * Limit how many CountryCodes to delete.
     */
    limit?: number
  }

  /**
   * CountryCode without action
   */
  export type CountryCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCode
     */
    select?: CountryCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryCode
     */
    omit?: CountryCodeOmit<ExtArgs> | null
  }


  /**
   * Model UserContact
   */

  export type AggregateUserContact = {
    _count: UserContactCountAggregateOutputType | null
    _min: UserContactMinAggregateOutputType | null
    _max: UserContactMaxAggregateOutputType | null
  }

  export type UserContactMinAggregateOutputType = {
    id: string | null
    ownerUserId: string | null
    phone: string | null
    name: string | null
    linkedUserId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UserContactMaxAggregateOutputType = {
    id: string | null
    ownerUserId: string | null
    phone: string | null
    name: string | null
    linkedUserId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UserContactCountAggregateOutputType = {
    id: number
    ownerUserId: number
    phone: number
    name: number
    linkedUserId: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type UserContactMinAggregateInputType = {
    id?: true
    ownerUserId?: true
    phone?: true
    name?: true
    linkedUserId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UserContactMaxAggregateInputType = {
    id?: true
    ownerUserId?: true
    phone?: true
    name?: true
    linkedUserId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UserContactCountAggregateInputType = {
    id?: true
    ownerUserId?: true
    phone?: true
    name?: true
    linkedUserId?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type UserContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContact to aggregate.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserContacts
    **/
    _count?: true | UserContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserContactMaxAggregateInputType
  }

  export type GetUserContactAggregateType<T extends UserContactAggregateArgs> = {
        [P in keyof T & keyof AggregateUserContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserContact[P]>
      : GetScalarType<T[P], AggregateUserContact[P]>
  }




  export type UserContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactWhereInput
    orderBy?: UserContactOrderByWithAggregationInput | UserContactOrderByWithAggregationInput[]
    by: UserContactScalarFieldEnum[] | UserContactScalarFieldEnum
    having?: UserContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserContactCountAggregateInputType | true
    _min?: UserContactMinAggregateInputType
    _max?: UserContactMaxAggregateInputType
  }

  export type UserContactGroupByOutputType = {
    id: string
    ownerUserId: string
    phone: string
    name: string | null
    linkedUserId: string | null
    isDeleted: boolean
    createdAt: Date
    _count: UserContactCountAggregateOutputType | null
    _min: UserContactMinAggregateOutputType | null
    _max: UserContactMaxAggregateOutputType | null
  }

  type GetUserContactGroupByPayload<T extends UserContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserContactGroupByOutputType[P]>
            : GetScalarType<T[P], UserContactGroupByOutputType[P]>
        }
      >
    >


  export type UserContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    phone?: boolean
    name?: boolean
    linkedUserId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    linkedUser?: boolean | UserContact$linkedUserArgs<ExtArgs>
  }, ExtArgs["result"]["userContact"]>

  export type UserContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    phone?: boolean
    name?: boolean
    linkedUserId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    linkedUser?: boolean | UserContact$linkedUserArgs<ExtArgs>
  }, ExtArgs["result"]["userContact"]>

  export type UserContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    phone?: boolean
    name?: boolean
    linkedUserId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    linkedUser?: boolean | UserContact$linkedUserArgs<ExtArgs>
  }, ExtArgs["result"]["userContact"]>

  export type UserContactSelectScalar = {
    id?: boolean
    ownerUserId?: boolean
    phone?: boolean
    name?: boolean
    linkedUserId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type UserContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerUserId" | "phone" | "name" | "linkedUserId" | "isDeleted" | "createdAt", ExtArgs["result"]["userContact"]>
  export type UserContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    linkedUser?: boolean | UserContact$linkedUserArgs<ExtArgs>
  }
  export type UserContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    linkedUser?: boolean | UserContact$linkedUserArgs<ExtArgs>
  }
  export type UserContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerUser?: boolean | UserDefaultArgs<ExtArgs>
    linkedUser?: boolean | UserContact$linkedUserArgs<ExtArgs>
  }

  export type $UserContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserContact"
    objects: {
      ownerUser: Prisma.$UserPayload<ExtArgs>
      linkedUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerUserId: string
      phone: string
      name: string | null
      linkedUserId: string | null
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["userContact"]>
    composites: {}
  }

  type UserContactGetPayload<S extends boolean | null | undefined | UserContactDefaultArgs> = $Result.GetResult<Prisma.$UserContactPayload, S>

  type UserContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserContactCountAggregateInputType | true
    }

  export interface UserContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserContact'], meta: { name: 'UserContact' } }
    /**
     * Find zero or one UserContact that matches the filter.
     * @param {UserContactFindUniqueArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserContactFindUniqueArgs>(args: SelectSubset<T, UserContactFindUniqueArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserContactFindUniqueOrThrowArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserContactFindUniqueOrThrowArgs>(args: SelectSubset<T, UserContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindFirstArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserContactFindFirstArgs>(args?: SelectSubset<T, UserContactFindFirstArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindFirstOrThrowArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserContactFindFirstOrThrowArgs>(args?: SelectSubset<T, UserContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserContacts
     * const userContacts = await prisma.userContact.findMany()
     * 
     * // Get first 10 UserContacts
     * const userContacts = await prisma.userContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userContactWithIdOnly = await prisma.userContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserContactFindManyArgs>(args?: SelectSubset<T, UserContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserContact.
     * @param {UserContactCreateArgs} args - Arguments to create a UserContact.
     * @example
     * // Create one UserContact
     * const UserContact = await prisma.userContact.create({
     *   data: {
     *     // ... data to create a UserContact
     *   }
     * })
     * 
     */
    create<T extends UserContactCreateArgs>(args: SelectSubset<T, UserContactCreateArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserContacts.
     * @param {UserContactCreateManyArgs} args - Arguments to create many UserContacts.
     * @example
     * // Create many UserContacts
     * const userContact = await prisma.userContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserContactCreateManyArgs>(args?: SelectSubset<T, UserContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserContacts and returns the data saved in the database.
     * @param {UserContactCreateManyAndReturnArgs} args - Arguments to create many UserContacts.
     * @example
     * // Create many UserContacts
     * const userContact = await prisma.userContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserContacts and only return the `id`
     * const userContactWithIdOnly = await prisma.userContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserContactCreateManyAndReturnArgs>(args?: SelectSubset<T, UserContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserContact.
     * @param {UserContactDeleteArgs} args - Arguments to delete one UserContact.
     * @example
     * // Delete one UserContact
     * const UserContact = await prisma.userContact.delete({
     *   where: {
     *     // ... filter to delete one UserContact
     *   }
     * })
     * 
     */
    delete<T extends UserContactDeleteArgs>(args: SelectSubset<T, UserContactDeleteArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserContact.
     * @param {UserContactUpdateArgs} args - Arguments to update one UserContact.
     * @example
     * // Update one UserContact
     * const userContact = await prisma.userContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserContactUpdateArgs>(args: SelectSubset<T, UserContactUpdateArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserContacts.
     * @param {UserContactDeleteManyArgs} args - Arguments to filter UserContacts to delete.
     * @example
     * // Delete a few UserContacts
     * const { count } = await prisma.userContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserContactDeleteManyArgs>(args?: SelectSubset<T, UserContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserContacts
     * const userContact = await prisma.userContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserContactUpdateManyArgs>(args: SelectSubset<T, UserContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContacts and returns the data updated in the database.
     * @param {UserContactUpdateManyAndReturnArgs} args - Arguments to update many UserContacts.
     * @example
     * // Update many UserContacts
     * const userContact = await prisma.userContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserContacts and only return the `id`
     * const userContactWithIdOnly = await prisma.userContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserContactUpdateManyAndReturnArgs>(args: SelectSubset<T, UserContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserContact.
     * @param {UserContactUpsertArgs} args - Arguments to update or create a UserContact.
     * @example
     * // Update or create a UserContact
     * const userContact = await prisma.userContact.upsert({
     *   create: {
     *     // ... data to create a UserContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserContact we want to update
     *   }
     * })
     */
    upsert<T extends UserContactUpsertArgs>(args: SelectSubset<T, UserContactUpsertArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactCountArgs} args - Arguments to filter UserContacts to count.
     * @example
     * // Count the number of UserContacts
     * const count = await prisma.userContact.count({
     *   where: {
     *     // ... the filter for the UserContacts we want to count
     *   }
     * })
    **/
    count<T extends UserContactCountArgs>(
      args?: Subset<T, UserContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserContactAggregateArgs>(args: Subset<T, UserContactAggregateArgs>): Prisma.PrismaPromise<GetUserContactAggregateType<T>>

    /**
     * Group by UserContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserContactGroupByArgs['orderBy'] }
        : { orderBy?: UserContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserContact model
   */
  readonly fields: UserContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownerUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    linkedUser<T extends UserContact$linkedUserArgs<ExtArgs> = {}>(args?: Subset<T, UserContact$linkedUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserContact model
   */
  interface UserContactFieldRefs {
    readonly id: FieldRef<"UserContact", 'String'>
    readonly ownerUserId: FieldRef<"UserContact", 'String'>
    readonly phone: FieldRef<"UserContact", 'String'>
    readonly name: FieldRef<"UserContact", 'String'>
    readonly linkedUserId: FieldRef<"UserContact", 'String'>
    readonly isDeleted: FieldRef<"UserContact", 'Boolean'>
    readonly createdAt: FieldRef<"UserContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserContact findUnique
   */
  export type UserContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact findUniqueOrThrow
   */
  export type UserContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact findFirst
   */
  export type UserContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * UserContact findFirstOrThrow
   */
  export type UserContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * UserContact findMany
   */
  export type UserContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * UserContact create
   */
  export type UserContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The data needed to create a UserContact.
     */
    data: XOR<UserContactCreateInput, UserContactUncheckedCreateInput>
  }

  /**
   * UserContact createMany
   */
  export type UserContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserContacts.
     */
    data: UserContactCreateManyInput | UserContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserContact createManyAndReturn
   */
  export type UserContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * The data used to create many UserContacts.
     */
    data: UserContactCreateManyInput | UserContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserContact update
   */
  export type UserContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The data needed to update a UserContact.
     */
    data: XOR<UserContactUpdateInput, UserContactUncheckedUpdateInput>
    /**
     * Choose, which UserContact to update.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact updateMany
   */
  export type UserContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserContacts.
     */
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyInput>
    /**
     * Filter which UserContacts to update
     */
    where?: UserContactWhereInput
    /**
     * Limit how many UserContacts to update.
     */
    limit?: number
  }

  /**
   * UserContact updateManyAndReturn
   */
  export type UserContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * The data used to update UserContacts.
     */
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyInput>
    /**
     * Filter which UserContacts to update
     */
    where?: UserContactWhereInput
    /**
     * Limit how many UserContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserContact upsert
   */
  export type UserContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The filter to search for the UserContact to update in case it exists.
     */
    where: UserContactWhereUniqueInput
    /**
     * In case the UserContact found by the `where` argument doesn't exist, create a new UserContact with this data.
     */
    create: XOR<UserContactCreateInput, UserContactUncheckedCreateInput>
    /**
     * In case the UserContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserContactUpdateInput, UserContactUncheckedUpdateInput>
  }

  /**
   * UserContact delete
   */
  export type UserContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter which UserContact to delete.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact deleteMany
   */
  export type UserContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContacts to delete
     */
    where?: UserContactWhereInput
    /**
     * Limit how many UserContacts to delete.
     */
    limit?: number
  }

  /**
   * UserContact.linkedUser
   */
  export type UserContact$linkedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserContact without action
   */
  export type UserContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    countryCode: string | null
    mobile: string | null
    email: string | null
    name: string | null
    lastName: string | null
    profilePicture: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    countryCode: string | null
    mobile: string | null
    email: string | null
    name: string | null
    lastName: string | null
    profilePicture: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    countryCode: number
    mobile: number
    email: number
    name: number
    lastName: number
    profilePicture: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    countryCode?: true
    mobile?: true
    email?: true
    name?: true
    lastName?: true
    profilePicture?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    countryCode?: true
    mobile?: true
    email?: true
    name?: true
    lastName?: true
    profilePicture?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    countryCode?: true
    mobile?: true
    email?: true
    name?: true
    lastName?: true
    profilePicture?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    countryCode: string
    mobile: string
    email: string | null
    name: string | null
    lastName: string | null
    profilePicture: string | null
    isDeleted: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryCode?: boolean
    mobile?: boolean
    email?: boolean
    name?: boolean
    lastName?: boolean
    profilePicture?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    linkedContacts?: boolean | User$linkedContactsArgs<ExtArgs>
    chatReactions?: boolean | User$chatReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryCode?: boolean
    mobile?: boolean
    email?: boolean
    name?: boolean
    lastName?: boolean
    profilePicture?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryCode?: boolean
    mobile?: boolean
    email?: boolean
    name?: boolean
    lastName?: boolean
    profilePicture?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    countryCode?: boolean
    mobile?: boolean
    email?: boolean
    name?: boolean
    lastName?: boolean
    profilePicture?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryCode" | "mobile" | "email" | "name" | "lastName" | "profilePicture" | "isDeleted" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    linkedContacts?: boolean | User$linkedContactsArgs<ExtArgs>
    chatReactions?: boolean | User$chatReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentMessages: Prisma.$ChatPayload<ExtArgs>[]
      receivedMessages: Prisma.$ChatPayload<ExtArgs>[]
      contacts: Prisma.$UserContactPayload<ExtArgs>[]
      linkedContacts: Prisma.$UserContactPayload<ExtArgs>[]
      chatReactions: Prisma.$ChatReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryCode: string
      mobile: string
      email: string | null
      name: string | null
      lastName: string | null
      profilePicture: string | null
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends User$contactsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedContacts<T extends User$linkedContactsArgs<ExtArgs> = {}>(args?: Subset<T, User$linkedContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatReactions<T extends User$chatReactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly countryCode: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.contacts
   */
  export type User$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    where?: UserContactWhereInput
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    cursor?: UserContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * User.linkedContacts
   */
  export type User$linkedContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    where?: UserContactWhereInput
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    cursor?: UserContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * User.chatReactions
   */
  export type User$chatReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatReaction
     */
    select?: ChatReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatReaction
     */
    omit?: ChatReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatReactionInclude<ExtArgs> | null
    where?: ChatReactionWhereInput
    orderBy?: ChatReactionOrderByWithRelationInput | ChatReactionOrderByWithRelationInput[]
    cursor?: ChatReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatReactionScalarFieldEnum | ChatReactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatReactionScalarFieldEnum: {
    id: 'id',
    reactorId: 'reactorId',
    messageId: 'messageId',
    emoji: 'emoji',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type ChatReactionScalarFieldEnum = (typeof ChatReactionScalarFieldEnum)[keyof typeof ChatReactionScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    receiverId: 'receiverId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const CountryCodeScalarFieldEnum: {
    id: 'id',
    countryName: 'countryName',
    countryCode: 'countryCode',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type CountryCodeScalarFieldEnum = (typeof CountryCodeScalarFieldEnum)[keyof typeof CountryCodeScalarFieldEnum]


  export const UserContactScalarFieldEnum: {
    id: 'id',
    ownerUserId: 'ownerUserId',
    phone: 'phone',
    name: 'name',
    linkedUserId: 'linkedUserId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type UserContactScalarFieldEnum = (typeof UserContactScalarFieldEnum)[keyof typeof UserContactScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    countryCode: 'countryCode',
    mobile: 'mobile',
    email: 'email',
    name: 'name',
    lastName: 'lastName',
    profilePicture: 'profilePicture',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatReactionWhereInput = {
    AND?: ChatReactionWhereInput | ChatReactionWhereInput[]
    OR?: ChatReactionWhereInput[]
    NOT?: ChatReactionWhereInput | ChatReactionWhereInput[]
    id?: StringFilter<"ChatReaction"> | string
    reactorId?: StringFilter<"ChatReaction"> | string
    messageId?: StringFilter<"ChatReaction"> | string
    emoji?: StringFilter<"ChatReaction"> | string
    isDeleted?: BoolFilter<"ChatReaction"> | boolean
    createdAt?: DateTimeFilter<"ChatReaction"> | Date | string
    reactor?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatReactionOrderByWithRelationInput = {
    id?: SortOrder
    reactorId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    reactor?: UserOrderByWithRelationInput
    message?: ChatOrderByWithRelationInput
  }

  export type ChatReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatReactionWhereInput | ChatReactionWhereInput[]
    OR?: ChatReactionWhereInput[]
    NOT?: ChatReactionWhereInput | ChatReactionWhereInput[]
    reactorId?: StringFilter<"ChatReaction"> | string
    messageId?: StringFilter<"ChatReaction"> | string
    emoji?: StringFilter<"ChatReaction"> | string
    isDeleted?: BoolFilter<"ChatReaction"> | boolean
    createdAt?: DateTimeFilter<"ChatReaction"> | Date | string
    reactor?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatReactionOrderByWithAggregationInput = {
    id?: SortOrder
    reactorId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: ChatReactionCountOrderByAggregateInput
    _max?: ChatReactionMaxOrderByAggregateInput
    _min?: ChatReactionMinOrderByAggregateInput
  }

  export type ChatReactionScalarWhereWithAggregatesInput = {
    AND?: ChatReactionScalarWhereWithAggregatesInput | ChatReactionScalarWhereWithAggregatesInput[]
    OR?: ChatReactionScalarWhereWithAggregatesInput[]
    NOT?: ChatReactionScalarWhereWithAggregatesInput | ChatReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatReaction"> | string
    reactorId?: StringWithAggregatesFilter<"ChatReaction"> | string
    messageId?: StringWithAggregatesFilter<"ChatReaction"> | string
    emoji?: StringWithAggregatesFilter<"ChatReaction"> | string
    isDeleted?: BoolWithAggregatesFilter<"ChatReaction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatReaction"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    content?: JsonFilter<"Chat">
    senderId?: StringFilter<"Chat"> | string
    receiverId?: StringFilter<"Chat"> | string
    isDeleted?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatReactions?: ChatReactionListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    chatReactions?: ChatReactionOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    content?: JsonFilter<"Chat">
    senderId?: StringFilter<"Chat"> | string
    receiverId?: StringFilter<"Chat"> | string
    isDeleted?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatReactions?: ChatReactionListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    content?: JsonWithAggregatesFilter<"Chat">
    senderId?: StringWithAggregatesFilter<"Chat"> | string
    receiverId?: StringWithAggregatesFilter<"Chat"> | string
    isDeleted?: BoolWithAggregatesFilter<"Chat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type CountryCodeWhereInput = {
    AND?: CountryCodeWhereInput | CountryCodeWhereInput[]
    OR?: CountryCodeWhereInput[]
    NOT?: CountryCodeWhereInput | CountryCodeWhereInput[]
    id?: IntFilter<"CountryCode"> | number
    countryName?: StringFilter<"CountryCode"> | string
    countryCode?: StringFilter<"CountryCode"> | string
    isDeleted?: BoolFilter<"CountryCode"> | boolean
    createdAt?: DateTimeFilter<"CountryCode"> | Date | string
  }

  export type CountryCodeOrderByWithRelationInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryCode?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type CountryCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    countryName?: string
    countryCode?: string
    AND?: CountryCodeWhereInput | CountryCodeWhereInput[]
    OR?: CountryCodeWhereInput[]
    NOT?: CountryCodeWhereInput | CountryCodeWhereInput[]
    isDeleted?: BoolFilter<"CountryCode"> | boolean
    createdAt?: DateTimeFilter<"CountryCode"> | Date | string
  }, "id" | "countryName" | "countryCode">

  export type CountryCodeOrderByWithAggregationInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryCode?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: CountryCodeCountOrderByAggregateInput
    _avg?: CountryCodeAvgOrderByAggregateInput
    _max?: CountryCodeMaxOrderByAggregateInput
    _min?: CountryCodeMinOrderByAggregateInput
    _sum?: CountryCodeSumOrderByAggregateInput
  }

  export type CountryCodeScalarWhereWithAggregatesInput = {
    AND?: CountryCodeScalarWhereWithAggregatesInput | CountryCodeScalarWhereWithAggregatesInput[]
    OR?: CountryCodeScalarWhereWithAggregatesInput[]
    NOT?: CountryCodeScalarWhereWithAggregatesInput | CountryCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CountryCode"> | number
    countryName?: StringWithAggregatesFilter<"CountryCode"> | string
    countryCode?: StringWithAggregatesFilter<"CountryCode"> | string
    isDeleted?: BoolWithAggregatesFilter<"CountryCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CountryCode"> | Date | string
  }

  export type UserContactWhereInput = {
    AND?: UserContactWhereInput | UserContactWhereInput[]
    OR?: UserContactWhereInput[]
    NOT?: UserContactWhereInput | UserContactWhereInput[]
    id?: StringFilter<"UserContact"> | string
    ownerUserId?: StringFilter<"UserContact"> | string
    phone?: StringFilter<"UserContact"> | string
    name?: StringNullableFilter<"UserContact"> | string | null
    linkedUserId?: StringNullableFilter<"UserContact"> | string | null
    isDeleted?: BoolFilter<"UserContact"> | boolean
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    ownerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    linkedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UserContactOrderByWithRelationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    phone?: SortOrder
    name?: SortOrderInput | SortOrder
    linkedUserId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    ownerUser?: UserOrderByWithRelationInput
    linkedUser?: UserOrderByWithRelationInput
  }

  export type UserContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserContactWhereInput | UserContactWhereInput[]
    OR?: UserContactWhereInput[]
    NOT?: UserContactWhereInput | UserContactWhereInput[]
    ownerUserId?: StringFilter<"UserContact"> | string
    phone?: StringFilter<"UserContact"> | string
    name?: StringNullableFilter<"UserContact"> | string | null
    linkedUserId?: StringNullableFilter<"UserContact"> | string | null
    isDeleted?: BoolFilter<"UserContact"> | boolean
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    ownerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    linkedUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserContactOrderByWithAggregationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    phone?: SortOrder
    name?: SortOrderInput | SortOrder
    linkedUserId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: UserContactCountOrderByAggregateInput
    _max?: UserContactMaxOrderByAggregateInput
    _min?: UserContactMinOrderByAggregateInput
  }

  export type UserContactScalarWhereWithAggregatesInput = {
    AND?: UserContactScalarWhereWithAggregatesInput | UserContactScalarWhereWithAggregatesInput[]
    OR?: UserContactScalarWhereWithAggregatesInput[]
    NOT?: UserContactScalarWhereWithAggregatesInput | UserContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserContact"> | string
    ownerUserId?: StringWithAggregatesFilter<"UserContact"> | string
    phone?: StringWithAggregatesFilter<"UserContact"> | string
    name?: StringNullableWithAggregatesFilter<"UserContact"> | string | null
    linkedUserId?: StringNullableWithAggregatesFilter<"UserContact"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"UserContact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserContact"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    countryCode?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: ChatListRelationFilter
    receivedMessages?: ChatListRelationFilter
    contacts?: UserContactListRelationFilter
    linkedContacts?: UserContactListRelationFilter
    chatReactions?: ChatReactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    sentMessages?: ChatOrderByRelationAggregateInput
    receivedMessages?: ChatOrderByRelationAggregateInput
    contacts?: UserContactOrderByRelationAggregateInput
    linkedContacts?: UserContactOrderByRelationAggregateInput
    chatReactions?: ChatReactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    countryCode?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: ChatListRelationFilter
    receivedMessages?: ChatListRelationFilter
    contacts?: UserContactListRelationFilter
    linkedContacts?: UserContactListRelationFilter
    chatReactions?: ChatReactionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    countryCode?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatReactionCreateInput = {
    id?: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
    reactor: UserCreateNestedOneWithoutChatReactionsInput
    message: ChatCreateNestedOneWithoutChatReactionsInput
  }

  export type ChatReactionUncheckedCreateInput = {
    id?: string
    reactorId: string
    messageId: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactor?: UserUpdateOneRequiredWithoutChatReactionsNestedInput
    message?: ChatUpdateOneRequiredWithoutChatReactionsNestedInput
  }

  export type ChatReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactorId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReactionCreateManyInput = {
    id?: string
    reactorId: string
    messageId: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactorId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    chatReactions?: ChatReactionCreateNestedManyWithoutMessageInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    senderId: string
    receiverId: string
    isDeleted?: boolean
    createdAt?: Date | string
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutMessageNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    senderId: string
    receiverId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCodeCreateInput = {
    countryName: string
    countryCode: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type CountryCodeUncheckedCreateInput = {
    id?: number
    countryName: string
    countryCode: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type CountryCodeUpdateInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryName?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCodeCreateManyInput = {
    id?: number
    countryName: string
    countryCode: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type CountryCodeUpdateManyMutationInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryName?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactCreateInput = {
    id?: string
    phone: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    ownerUser: UserCreateNestedOneWithoutContactsInput
    linkedUser?: UserCreateNestedOneWithoutLinkedContactsInput
  }

  export type UserContactUncheckedCreateInput = {
    id?: string
    ownerUserId: string
    phone: string
    name?: string | null
    linkedUserId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUser?: UserUpdateOneRequiredWithoutContactsNestedInput
    linkedUser?: UserUpdateOneWithoutLinkedContactsNestedInput
  }

  export type UserContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactCreateManyInput = {
    id?: string
    ownerUserId: string
    phone: string
    name?: string | null
    linkedUserId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatCreateNestedManyWithoutReceiverInput
    contacts?: UserContactCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionCreateNestedManyWithoutReactorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactUncheckedCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutReactorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutReactorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUncheckedUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutReactorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatReactionCountOrderByAggregateInput = {
    id?: SortOrder
    reactorId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    reactorId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatReactionMinOrderByAggregateInput = {
    id?: SortOrder
    reactorId?: SortOrder
    messageId?: SortOrder
    emoji?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ChatReactionListRelationFilter = {
    every?: ChatReactionWhereInput
    some?: ChatReactionWhereInput
    none?: ChatReactionWhereInput
  }

  export type ChatReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CountryCodeCountOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryCode?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type CountryCodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryCode?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type CountryCodeMinOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryCode?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type CountryCodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserContactCountOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    linkedUserId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserContactMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    linkedUserId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserContactMinOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    linkedUserId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type UserContactListRelationFilter = {
    every?: UserContactWhereInput
    some?: UserContactWhereInput
    none?: UserContactWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    profilePicture?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    profilePicture?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    profilePicture?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutChatReactionsInput = {
    create?: XOR<UserCreateWithoutChatReactionsInput, UserUncheckedCreateWithoutChatReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutChatReactionsInput = {
    create?: XOR<ChatCreateWithoutChatReactionsInput, ChatUncheckedCreateWithoutChatReactionsInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatReactionsInput
    connect?: ChatWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutChatReactionsNestedInput = {
    create?: XOR<UserCreateWithoutChatReactionsInput, UserUncheckedCreateWithoutChatReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatReactionsInput
    upsert?: UserUpsertWithoutChatReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatReactionsInput, UserUpdateWithoutChatReactionsInput>, UserUncheckedUpdateWithoutChatReactionsInput>
  }

  export type ChatUpdateOneRequiredWithoutChatReactionsNestedInput = {
    create?: XOR<ChatCreateWithoutChatReactionsInput, ChatUncheckedCreateWithoutChatReactionsInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatReactionsInput
    upsert?: ChatUpsertWithoutChatReactionsInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutChatReactionsInput, ChatUpdateWithoutChatReactionsInput>, ChatUncheckedUpdateWithoutChatReactionsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatReactionCreateNestedManyWithoutMessageInput = {
    create?: XOR<ChatReactionCreateWithoutMessageInput, ChatReactionUncheckedCreateWithoutMessageInput> | ChatReactionCreateWithoutMessageInput[] | ChatReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutMessageInput | ChatReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ChatReactionCreateManyMessageInputEnvelope
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
  }

  export type ChatReactionUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ChatReactionCreateWithoutMessageInput, ChatReactionUncheckedCreateWithoutMessageInput> | ChatReactionCreateWithoutMessageInput[] | ChatReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutMessageInput | ChatReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ChatReactionCreateManyMessageInputEnvelope
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ChatReactionUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ChatReactionCreateWithoutMessageInput, ChatReactionUncheckedCreateWithoutMessageInput> | ChatReactionCreateWithoutMessageInput[] | ChatReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutMessageInput | ChatReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ChatReactionUpsertWithWhereUniqueWithoutMessageInput | ChatReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ChatReactionCreateManyMessageInputEnvelope
    set?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    disconnect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    delete?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    update?: ChatReactionUpdateWithWhereUniqueWithoutMessageInput | ChatReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ChatReactionUpdateManyWithWhereWithoutMessageInput | ChatReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ChatReactionScalarWhereInput | ChatReactionScalarWhereInput[]
  }

  export type ChatReactionUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ChatReactionCreateWithoutMessageInput, ChatReactionUncheckedCreateWithoutMessageInput> | ChatReactionCreateWithoutMessageInput[] | ChatReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutMessageInput | ChatReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ChatReactionUpsertWithWhereUniqueWithoutMessageInput | ChatReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ChatReactionCreateManyMessageInputEnvelope
    set?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    disconnect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    delete?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    update?: ChatReactionUpdateWithWhereUniqueWithoutMessageInput | ChatReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ChatReactionUpdateManyWithWhereWithoutMessageInput | ChatReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ChatReactionScalarWhereInput | ChatReactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutContactsInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLinkedContactsInput = {
    create?: XOR<UserCreateWithoutLinkedContactsInput, UserUncheckedCreateWithoutLinkedContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedContactsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    upsert?: UserUpsertWithoutContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsInput, UserUpdateWithoutContactsInput>, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateOneWithoutLinkedContactsNestedInput = {
    create?: XOR<UserCreateWithoutLinkedContactsInput, UserUncheckedCreateWithoutLinkedContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedContactsInput
    upsert?: UserUpsertWithoutLinkedContactsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkedContactsInput, UserUpdateWithoutLinkedContactsInput>, UserUncheckedUpdateWithoutLinkedContactsInput>
  }

  export type ChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type UserContactCreateNestedManyWithoutOwnerUserInput = {
    create?: XOR<UserContactCreateWithoutOwnerUserInput, UserContactUncheckedCreateWithoutOwnerUserInput> | UserContactCreateWithoutOwnerUserInput[] | UserContactUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerUserInput | UserContactCreateOrConnectWithoutOwnerUserInput[]
    createMany?: UserContactCreateManyOwnerUserInputEnvelope
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
  }

  export type UserContactCreateNestedManyWithoutLinkedUserInput = {
    create?: XOR<UserContactCreateWithoutLinkedUserInput, UserContactUncheckedCreateWithoutLinkedUserInput> | UserContactCreateWithoutLinkedUserInput[] | UserContactUncheckedCreateWithoutLinkedUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutLinkedUserInput | UserContactCreateOrConnectWithoutLinkedUserInput[]
    createMany?: UserContactCreateManyLinkedUserInputEnvelope
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
  }

  export type ChatReactionCreateNestedManyWithoutReactorInput = {
    create?: XOR<ChatReactionCreateWithoutReactorInput, ChatReactionUncheckedCreateWithoutReactorInput> | ChatReactionCreateWithoutReactorInput[] | ChatReactionUncheckedCreateWithoutReactorInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutReactorInput | ChatReactionCreateOrConnectWithoutReactorInput[]
    createMany?: ChatReactionCreateManyReactorInputEnvelope
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type UserContactUncheckedCreateNestedManyWithoutOwnerUserInput = {
    create?: XOR<UserContactCreateWithoutOwnerUserInput, UserContactUncheckedCreateWithoutOwnerUserInput> | UserContactCreateWithoutOwnerUserInput[] | UserContactUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerUserInput | UserContactCreateOrConnectWithoutOwnerUserInput[]
    createMany?: UserContactCreateManyOwnerUserInputEnvelope
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
  }

  export type UserContactUncheckedCreateNestedManyWithoutLinkedUserInput = {
    create?: XOR<UserContactCreateWithoutLinkedUserInput, UserContactUncheckedCreateWithoutLinkedUserInput> | UserContactCreateWithoutLinkedUserInput[] | UserContactUncheckedCreateWithoutLinkedUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutLinkedUserInput | UserContactCreateOrConnectWithoutLinkedUserInput[]
    createMany?: UserContactCreateManyLinkedUserInputEnvelope
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
  }

  export type ChatReactionUncheckedCreateNestedManyWithoutReactorInput = {
    create?: XOR<ChatReactionCreateWithoutReactorInput, ChatReactionUncheckedCreateWithoutReactorInput> | ChatReactionCreateWithoutReactorInput[] | ChatReactionUncheckedCreateWithoutReactorInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutReactorInput | ChatReactionCreateOrConnectWithoutReactorInput[]
    createMany?: ChatReactionCreateManyReactorInputEnvelope
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
  }

  export type ChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserContactUpdateManyWithoutOwnerUserNestedInput = {
    create?: XOR<UserContactCreateWithoutOwnerUserInput, UserContactUncheckedCreateWithoutOwnerUserInput> | UserContactCreateWithoutOwnerUserInput[] | UserContactUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerUserInput | UserContactCreateOrConnectWithoutOwnerUserInput[]
    upsert?: UserContactUpsertWithWhereUniqueWithoutOwnerUserInput | UserContactUpsertWithWhereUniqueWithoutOwnerUserInput[]
    createMany?: UserContactCreateManyOwnerUserInputEnvelope
    set?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    disconnect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    delete?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    update?: UserContactUpdateWithWhereUniqueWithoutOwnerUserInput | UserContactUpdateWithWhereUniqueWithoutOwnerUserInput[]
    updateMany?: UserContactUpdateManyWithWhereWithoutOwnerUserInput | UserContactUpdateManyWithWhereWithoutOwnerUserInput[]
    deleteMany?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
  }

  export type UserContactUpdateManyWithoutLinkedUserNestedInput = {
    create?: XOR<UserContactCreateWithoutLinkedUserInput, UserContactUncheckedCreateWithoutLinkedUserInput> | UserContactCreateWithoutLinkedUserInput[] | UserContactUncheckedCreateWithoutLinkedUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutLinkedUserInput | UserContactCreateOrConnectWithoutLinkedUserInput[]
    upsert?: UserContactUpsertWithWhereUniqueWithoutLinkedUserInput | UserContactUpsertWithWhereUniqueWithoutLinkedUserInput[]
    createMany?: UserContactCreateManyLinkedUserInputEnvelope
    set?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    disconnect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    delete?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    update?: UserContactUpdateWithWhereUniqueWithoutLinkedUserInput | UserContactUpdateWithWhereUniqueWithoutLinkedUserInput[]
    updateMany?: UserContactUpdateManyWithWhereWithoutLinkedUserInput | UserContactUpdateManyWithWhereWithoutLinkedUserInput[]
    deleteMany?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
  }

  export type ChatReactionUpdateManyWithoutReactorNestedInput = {
    create?: XOR<ChatReactionCreateWithoutReactorInput, ChatReactionUncheckedCreateWithoutReactorInput> | ChatReactionCreateWithoutReactorInput[] | ChatReactionUncheckedCreateWithoutReactorInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutReactorInput | ChatReactionCreateOrConnectWithoutReactorInput[]
    upsert?: ChatReactionUpsertWithWhereUniqueWithoutReactorInput | ChatReactionUpsertWithWhereUniqueWithoutReactorInput[]
    createMany?: ChatReactionCreateManyReactorInputEnvelope
    set?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    disconnect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    delete?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    update?: ChatReactionUpdateWithWhereUniqueWithoutReactorInput | ChatReactionUpdateWithWhereUniqueWithoutReactorInput[]
    updateMany?: ChatReactionUpdateManyWithWhereWithoutReactorInput | ChatReactionUpdateManyWithWhereWithoutReactorInput[]
    deleteMany?: ChatReactionScalarWhereInput | ChatReactionScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserContactUncheckedUpdateManyWithoutOwnerUserNestedInput = {
    create?: XOR<UserContactCreateWithoutOwnerUserInput, UserContactUncheckedCreateWithoutOwnerUserInput> | UserContactCreateWithoutOwnerUserInput[] | UserContactUncheckedCreateWithoutOwnerUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerUserInput | UserContactCreateOrConnectWithoutOwnerUserInput[]
    upsert?: UserContactUpsertWithWhereUniqueWithoutOwnerUserInput | UserContactUpsertWithWhereUniqueWithoutOwnerUserInput[]
    createMany?: UserContactCreateManyOwnerUserInputEnvelope
    set?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    disconnect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    delete?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    update?: UserContactUpdateWithWhereUniqueWithoutOwnerUserInput | UserContactUpdateWithWhereUniqueWithoutOwnerUserInput[]
    updateMany?: UserContactUpdateManyWithWhereWithoutOwnerUserInput | UserContactUpdateManyWithWhereWithoutOwnerUserInput[]
    deleteMany?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
  }

  export type UserContactUncheckedUpdateManyWithoutLinkedUserNestedInput = {
    create?: XOR<UserContactCreateWithoutLinkedUserInput, UserContactUncheckedCreateWithoutLinkedUserInput> | UserContactCreateWithoutLinkedUserInput[] | UserContactUncheckedCreateWithoutLinkedUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutLinkedUserInput | UserContactCreateOrConnectWithoutLinkedUserInput[]
    upsert?: UserContactUpsertWithWhereUniqueWithoutLinkedUserInput | UserContactUpsertWithWhereUniqueWithoutLinkedUserInput[]
    createMany?: UserContactCreateManyLinkedUserInputEnvelope
    set?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    disconnect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    delete?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    update?: UserContactUpdateWithWhereUniqueWithoutLinkedUserInput | UserContactUpdateWithWhereUniqueWithoutLinkedUserInput[]
    updateMany?: UserContactUpdateManyWithWhereWithoutLinkedUserInput | UserContactUpdateManyWithWhereWithoutLinkedUserInput[]
    deleteMany?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
  }

  export type ChatReactionUncheckedUpdateManyWithoutReactorNestedInput = {
    create?: XOR<ChatReactionCreateWithoutReactorInput, ChatReactionUncheckedCreateWithoutReactorInput> | ChatReactionCreateWithoutReactorInput[] | ChatReactionUncheckedCreateWithoutReactorInput[]
    connectOrCreate?: ChatReactionCreateOrConnectWithoutReactorInput | ChatReactionCreateOrConnectWithoutReactorInput[]
    upsert?: ChatReactionUpsertWithWhereUniqueWithoutReactorInput | ChatReactionUpsertWithWhereUniqueWithoutReactorInput[]
    createMany?: ChatReactionCreateManyReactorInputEnvelope
    set?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    disconnect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    delete?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    connect?: ChatReactionWhereUniqueInput | ChatReactionWhereUniqueInput[]
    update?: ChatReactionUpdateWithWhereUniqueWithoutReactorInput | ChatReactionUpdateWithWhereUniqueWithoutReactorInput[]
    updateMany?: ChatReactionUpdateManyWithWhereWithoutReactorInput | ChatReactionUpdateManyWithWhereWithoutReactorInput[]
    deleteMany?: ChatReactionScalarWhereInput | ChatReactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutChatReactionsInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatCreateNestedManyWithoutReceiverInput
    contacts?: UserContactCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactCreateNestedManyWithoutLinkedUserInput
  }

  export type UserUncheckedCreateWithoutChatReactionsInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactUncheckedCreateNestedManyWithoutLinkedUserInput
  }

  export type UserCreateOrConnectWithoutChatReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatReactionsInput, UserUncheckedCreateWithoutChatReactionsInput>
  }

  export type ChatCreateWithoutChatReactionsInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type ChatUncheckedCreateWithoutChatReactionsInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    senderId: string
    receiverId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutChatReactionsInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutChatReactionsInput, ChatUncheckedCreateWithoutChatReactionsInput>
  }

  export type UserUpsertWithoutChatReactionsInput = {
    update: XOR<UserUpdateWithoutChatReactionsInput, UserUncheckedUpdateWithoutChatReactionsInput>
    create: XOR<UserCreateWithoutChatReactionsInput, UserUncheckedCreateWithoutChatReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatReactionsInput, UserUncheckedUpdateWithoutChatReactionsInput>
  }

  export type UserUpdateWithoutChatReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUpdateManyWithoutLinkedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUncheckedUpdateManyWithoutLinkedUserNestedInput
  }

  export type ChatUpsertWithoutChatReactionsInput = {
    update: XOR<ChatUpdateWithoutChatReactionsInput, ChatUncheckedUpdateWithoutChatReactionsInput>
    create: XOR<ChatCreateWithoutChatReactionsInput, ChatUncheckedCreateWithoutChatReactionsInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutChatReactionsInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutChatReactionsInput, ChatUncheckedUpdateWithoutChatReactionsInput>
  }

  export type ChatUpdateWithoutChatReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type ChatUncheckedUpdateWithoutChatReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    receivedMessages?: ChatCreateNestedManyWithoutReceiverInput
    contacts?: UserContactCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionCreateNestedManyWithoutReactorInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    receivedMessages?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactUncheckedCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutReactorInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    contacts?: UserContactCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionCreateNestedManyWithoutReactorInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutOwnerUserInput
    linkedContacts?: UserContactUncheckedCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutReactorInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ChatReactionCreateWithoutMessageInput = {
    id?: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
    reactor: UserCreateNestedOneWithoutChatReactionsInput
  }

  export type ChatReactionUncheckedCreateWithoutMessageInput = {
    id?: string
    reactorId: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatReactionCreateOrConnectWithoutMessageInput = {
    where: ChatReactionWhereUniqueInput
    create: XOR<ChatReactionCreateWithoutMessageInput, ChatReactionUncheckedCreateWithoutMessageInput>
  }

  export type ChatReactionCreateManyMessageInputEnvelope = {
    data: ChatReactionCreateManyMessageInput | ChatReactionCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedMessages?: ChatUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutReactorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedMessages?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUncheckedUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutReactorNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    contacts?: UserContactUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutReactorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutOwnerUserNestedInput
    linkedContacts?: UserContactUncheckedUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutReactorNestedInput
  }

  export type ChatReactionUpsertWithWhereUniqueWithoutMessageInput = {
    where: ChatReactionWhereUniqueInput
    update: XOR<ChatReactionUpdateWithoutMessageInput, ChatReactionUncheckedUpdateWithoutMessageInput>
    create: XOR<ChatReactionCreateWithoutMessageInput, ChatReactionUncheckedCreateWithoutMessageInput>
  }

  export type ChatReactionUpdateWithWhereUniqueWithoutMessageInput = {
    where: ChatReactionWhereUniqueInput
    data: XOR<ChatReactionUpdateWithoutMessageInput, ChatReactionUncheckedUpdateWithoutMessageInput>
  }

  export type ChatReactionUpdateManyWithWhereWithoutMessageInput = {
    where: ChatReactionScalarWhereInput
    data: XOR<ChatReactionUpdateManyMutationInput, ChatReactionUncheckedUpdateManyWithoutMessageInput>
  }

  export type ChatReactionScalarWhereInput = {
    AND?: ChatReactionScalarWhereInput | ChatReactionScalarWhereInput[]
    OR?: ChatReactionScalarWhereInput[]
    NOT?: ChatReactionScalarWhereInput | ChatReactionScalarWhereInput[]
    id?: StringFilter<"ChatReaction"> | string
    reactorId?: StringFilter<"ChatReaction"> | string
    messageId?: StringFilter<"ChatReaction"> | string
    emoji?: StringFilter<"ChatReaction"> | string
    isDeleted?: BoolFilter<"ChatReaction"> | boolean
    createdAt?: DateTimeFilter<"ChatReaction"> | Date | string
  }

  export type UserCreateWithoutContactsInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatCreateNestedManyWithoutReceiverInput
    linkedContacts?: UserContactCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionCreateNestedManyWithoutReactorInput
  }

  export type UserUncheckedCreateWithoutContactsInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    linkedContacts?: UserContactUncheckedCreateNestedManyWithoutLinkedUserInput
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutReactorInput
  }

  export type UserCreateOrConnectWithoutContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
  }

  export type UserCreateWithoutLinkedContactsInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatCreateNestedManyWithoutReceiverInput
    contacts?: UserContactCreateNestedManyWithoutOwnerUserInput
    chatReactions?: ChatReactionCreateNestedManyWithoutReactorInput
  }

  export type UserUncheckedCreateWithoutLinkedContactsInput = {
    id?: string
    countryCode: string
    mobile: string
    email?: string | null
    name?: string | null
    lastName?: string | null
    profilePicture?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutOwnerUserInput
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutReactorInput
  }

  export type UserCreateOrConnectWithoutLinkedContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkedContactsInput, UserUncheckedCreateWithoutLinkedContactsInput>
  }

  export type UserUpsertWithoutContactsInput = {
    update: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUpdateManyWithoutReceiverNestedInput
    linkedContacts?: UserContactUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutReactorNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    linkedContacts?: UserContactUncheckedUpdateManyWithoutLinkedUserNestedInput
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutReactorNestedInput
  }

  export type UserUpsertWithoutLinkedContactsInput = {
    update: XOR<UserUpdateWithoutLinkedContactsInput, UserUncheckedUpdateWithoutLinkedContactsInput>
    create: XOR<UserCreateWithoutLinkedContactsInput, UserUncheckedCreateWithoutLinkedContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkedContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkedContactsInput, UserUncheckedUpdateWithoutLinkedContactsInput>
  }

  export type UserUpdateWithoutLinkedContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUpdateManyWithoutOwnerUserNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutReactorNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkedContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutOwnerUserNestedInput
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutReactorNestedInput
  }

  export type ChatCreateWithoutSenderInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
    chatReactions?: ChatReactionCreateNestedManyWithoutMessageInput
  }

  export type ChatUncheckedCreateWithoutSenderInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    receiverId: string
    isDeleted?: boolean
    createdAt?: Date | string
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ChatCreateOrConnectWithoutSenderInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatCreateManySenderInputEnvelope = {
    data: ChatCreateManySenderInput | ChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutReceiverInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    chatReactions?: ChatReactionCreateNestedManyWithoutMessageInput
  }

  export type ChatUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    senderId: string
    isDeleted?: boolean
    createdAt?: Date | string
    chatReactions?: ChatReactionUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ChatCreateOrConnectWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatCreateManyReceiverInputEnvelope = {
    data: ChatCreateManyReceiverInput | ChatCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type UserContactCreateWithoutOwnerUserInput = {
    id?: string
    phone: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    linkedUser?: UserCreateNestedOneWithoutLinkedContactsInput
  }

  export type UserContactUncheckedCreateWithoutOwnerUserInput = {
    id?: string
    phone: string
    name?: string | null
    linkedUserId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserContactCreateOrConnectWithoutOwnerUserInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutOwnerUserInput, UserContactUncheckedCreateWithoutOwnerUserInput>
  }

  export type UserContactCreateManyOwnerUserInputEnvelope = {
    data: UserContactCreateManyOwnerUserInput | UserContactCreateManyOwnerUserInput[]
    skipDuplicates?: boolean
  }

  export type UserContactCreateWithoutLinkedUserInput = {
    id?: string
    phone: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    ownerUser: UserCreateNestedOneWithoutContactsInput
  }

  export type UserContactUncheckedCreateWithoutLinkedUserInput = {
    id?: string
    ownerUserId: string
    phone: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserContactCreateOrConnectWithoutLinkedUserInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutLinkedUserInput, UserContactUncheckedCreateWithoutLinkedUserInput>
  }

  export type UserContactCreateManyLinkedUserInputEnvelope = {
    data: UserContactCreateManyLinkedUserInput | UserContactCreateManyLinkedUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatReactionCreateWithoutReactorInput = {
    id?: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
    message: ChatCreateNestedOneWithoutChatReactionsInput
  }

  export type ChatReactionUncheckedCreateWithoutReactorInput = {
    id?: string
    messageId: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatReactionCreateOrConnectWithoutReactorInput = {
    where: ChatReactionWhereUniqueInput
    create: XOR<ChatReactionCreateWithoutReactorInput, ChatReactionUncheckedCreateWithoutReactorInput>
  }

  export type ChatReactionCreateManyReactorInputEnvelope = {
    data: ChatReactionCreateManyReactorInput | ChatReactionCreateManyReactorInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    content?: JsonFilter<"Chat">
    senderId?: StringFilter<"Chat"> | string
    receiverId?: StringFilter<"Chat"> | string
    isDeleted?: BoolFilter<"Chat"> | boolean
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
  }

  export type ChatUpdateManyWithWhereWithoutReceiverInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserContactUpsertWithWhereUniqueWithoutOwnerUserInput = {
    where: UserContactWhereUniqueInput
    update: XOR<UserContactUpdateWithoutOwnerUserInput, UserContactUncheckedUpdateWithoutOwnerUserInput>
    create: XOR<UserContactCreateWithoutOwnerUserInput, UserContactUncheckedCreateWithoutOwnerUserInput>
  }

  export type UserContactUpdateWithWhereUniqueWithoutOwnerUserInput = {
    where: UserContactWhereUniqueInput
    data: XOR<UserContactUpdateWithoutOwnerUserInput, UserContactUncheckedUpdateWithoutOwnerUserInput>
  }

  export type UserContactUpdateManyWithWhereWithoutOwnerUserInput = {
    where: UserContactScalarWhereInput
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyWithoutOwnerUserInput>
  }

  export type UserContactScalarWhereInput = {
    AND?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
    OR?: UserContactScalarWhereInput[]
    NOT?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
    id?: StringFilter<"UserContact"> | string
    ownerUserId?: StringFilter<"UserContact"> | string
    phone?: StringFilter<"UserContact"> | string
    name?: StringNullableFilter<"UserContact"> | string | null
    linkedUserId?: StringNullableFilter<"UserContact"> | string | null
    isDeleted?: BoolFilter<"UserContact"> | boolean
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
  }

  export type UserContactUpsertWithWhereUniqueWithoutLinkedUserInput = {
    where: UserContactWhereUniqueInput
    update: XOR<UserContactUpdateWithoutLinkedUserInput, UserContactUncheckedUpdateWithoutLinkedUserInput>
    create: XOR<UserContactCreateWithoutLinkedUserInput, UserContactUncheckedCreateWithoutLinkedUserInput>
  }

  export type UserContactUpdateWithWhereUniqueWithoutLinkedUserInput = {
    where: UserContactWhereUniqueInput
    data: XOR<UserContactUpdateWithoutLinkedUserInput, UserContactUncheckedUpdateWithoutLinkedUserInput>
  }

  export type UserContactUpdateManyWithWhereWithoutLinkedUserInput = {
    where: UserContactScalarWhereInput
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyWithoutLinkedUserInput>
  }

  export type ChatReactionUpsertWithWhereUniqueWithoutReactorInput = {
    where: ChatReactionWhereUniqueInput
    update: XOR<ChatReactionUpdateWithoutReactorInput, ChatReactionUncheckedUpdateWithoutReactorInput>
    create: XOR<ChatReactionCreateWithoutReactorInput, ChatReactionUncheckedCreateWithoutReactorInput>
  }

  export type ChatReactionUpdateWithWhereUniqueWithoutReactorInput = {
    where: ChatReactionWhereUniqueInput
    data: XOR<ChatReactionUpdateWithoutReactorInput, ChatReactionUncheckedUpdateWithoutReactorInput>
  }

  export type ChatReactionUpdateManyWithWhereWithoutReactorInput = {
    where: ChatReactionScalarWhereInput
    data: XOR<ChatReactionUpdateManyMutationInput, ChatReactionUncheckedUpdateManyWithoutReactorInput>
  }

  export type ChatReactionCreateManyMessageInput = {
    id?: string
    reactorId: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatReactionUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactor?: UserUpdateOneRequiredWithoutChatReactionsNestedInput
  }

  export type ChatReactionUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactorId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReactionUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    reactorId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManySenderInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    receiverId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatCreateManyReceiverInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    senderId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserContactCreateManyOwnerUserInput = {
    id?: string
    phone: string
    name?: string | null
    linkedUserId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserContactCreateManyLinkedUserInput = {
    id?: string
    ownerUserId: string
    phone: string
    name?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatReactionCreateManyReactorInput = {
    id?: string
    messageId: string
    emoji: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ChatUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutMessageNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    receiverId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    receiverId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    chatReactions?: ChatReactionUpdateManyWithoutMessageNestedInput
  }

  export type ChatUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatReactions?: ChatReactionUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactUpdateWithoutOwnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedUser?: UserUpdateOneWithoutLinkedContactsNestedInput
  }

  export type UserContactUncheckedUpdateWithoutOwnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactUncheckedUpdateManyWithoutOwnerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactUpdateWithoutLinkedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUser?: UserUpdateOneRequiredWithoutContactsNestedInput
  }

  export type UserContactUncheckedUpdateWithoutLinkedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserContactUncheckedUpdateManyWithoutLinkedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReactionUpdateWithoutReactorInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: ChatUpdateOneRequiredWithoutChatReactionsNestedInput
  }

  export type ChatReactionUncheckedUpdateWithoutReactorInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatReactionUncheckedUpdateManyWithoutReactorInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}