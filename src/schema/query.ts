export const queryPost = `
        posts(page: Int, offset:Int): [Post]
        post(id: Int): [Post]
`