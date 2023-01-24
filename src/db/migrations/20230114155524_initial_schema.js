export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("username")
    table.text("firstName")
    table.text("lastName")
    table.text("passwordHash")
    table.text("passwordSalt")
  })
  await knex.schema.createTable("posts", (table) => {
    table.increments("id")
    table.text("title")
    table.text("content")
    table.integer("userId")
    table.timestamp("publishedAt")
    table.timestamp("createdAt")
    table.timestamp("updatedAt")
  })
  await knex.schema.createTable("comments", (table) => {
    table.increments("id")
    table.text("content")
    table.integer("userId")
    table.integer("postId")
    table.timestamp("createdAt")
    table.timestamp("updatedAt")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("comments")
  await knex.schema.dropTable("posts")
  await knex.schema.dropTable("users")
}
