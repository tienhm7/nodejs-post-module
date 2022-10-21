import query from './query';
import mutation from './mutation';

export const resolverPost = {
    ...query,
    ...mutation
};
