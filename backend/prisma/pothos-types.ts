import type { Prisma, Post } from "@prisma/client";
export default interface PrismaTypes {
    Post: {
        Name: "Post";
        Shape: Post;
        Include: never;
        Select: Prisma.PostSelect;
        Where: Prisma.PostWhereUniqueInput;
        Fields: never;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}