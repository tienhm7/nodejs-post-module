import { PostModel, IPost } from "../model";
import { Input, Output } from 'req-res-formatter';
import config from '../config/config'

const queryPost = {
    posts: async (req: any, res: any) => {
        let page: number, offset: number;
        let posts: IPost[];

        // format input request
        [page, offset] = Input.list(req);

        // list post document
        if (page) {
            offset = offset ? offset : config.offset;
            posts = await PostModel.find()
                .skip(Math.abs((page - 1) * offset))
                .limit(offset);
        } else {
            posts = await PostModel.find();
        }

        // format response output
        return Output.response(req, posts, res);
    },

    post: async (req: any, res: any) => {
        // format input request
        let id: number = Input.detail(req);

        // show post document detail
        const post = await PostModel.findById(id);

        // format response output
        return Output.response(req, post, res);
    },
};

export default queryPost;