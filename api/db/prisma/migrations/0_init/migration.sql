-- CreateTable
CREATE TABLE "following" (
    "id_follower" UUID NOT NULL,
    "id_following" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "following_pkey" PRIMARY KEY ("id_follower","id_following")
);

-- CreateTable
CREATE TABLE "posts" (
    "post_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "caption" TEXT,
    "n_likes" SMALLINT NOT NULL DEFAULT 0,
    "liked_by" UUID,
    "n_comments" SMALLINT,
    "comments" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT[],
    "upload_by" UUID NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "lastname" VARCHAR,
    "n_posts" SMALLINT NOT NULL DEFAULT 0,
    "n_followers" SMALLINT NOT NULL DEFAULT 0,
    "n_following" SMALLINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avatar_url" TEXT NOT NULL DEFAULT 'https://wsxpfzeomqgngmwlrdbf.supabase.co/storage/v1/object/sign/profile_pictures/no%20profile.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlX3BpY3R1cmVzL25vIHByb2ZpbGUuanBnIiwiaWF0IjoxNjk3NTgyNTgzLCJleHAiOjE3MjkxMTg1ODN9.H73oqer-e65Ggk_lXDYqoDeGOCheui6_Rk58bNTnGuw&t=2023-10-17T22%3A42%3A56.132Z',
    "bio" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "following" ADD CONSTRAINT "following_id_follower_fkey" FOREIGN KEY ("id_follower") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "following" ADD CONSTRAINT "following_id_following_fkey" FOREIGN KEY ("id_following") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_liked_by_fkey" FOREIGN KEY ("liked_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_upload_by_fkey" FOREIGN KEY ("upload_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

