import { PostModel } from "../model";
import { Input, Output } from 'req-res-formatter';

const mutationPost = {
    createPost: async (req: any, res: any) => {
        let post;
        console.log('bbbbbbbbbb');
        // format input request
        let data = Input.create(req);
        console.log('data:', data);
        // create post document
        try {
            post = await PostModel.create(data);
        } catch (e) {
            console.log(e);
        }

        console.log('post:', post);

        // format response output
        return Output.response(req, post, res);
    },
    updatePost: async (req: any, res: any) => {
        let id: number, data: any;

        // format input request
        [data, id] = Input.update(req);

        // update post document
        const post = await PostModel.findOneAndUpdate({_id: id}, data, {new: true}).catch((e) => console.log(e));

        // format response output
        return Output.response(req, post, res);
    },
    deletePost: async (req: any, res: any) => {
        // format input request
        const id: number = Input.delete(req);

        // delete post document
        const Post: { acknowledged: boolean; deletedCount: number } = await PostModel.deleteOne({
            _id: id,
        });

        // format output response
        return Output.response(req, Post.deletedCount, res);
    },
}

export default mutationPost;