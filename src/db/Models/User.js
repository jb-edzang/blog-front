import { Model } from "objection"
import Post from "./Post.js"

class User extends Model {
  static tableName = "users"

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "users.id",
          to: "posts.userId",
        },
      },
    }
  }
}

export default User
