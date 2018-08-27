import * as mongoose from 'mongoose';

import logger from 'utils/logger';

mongoose.set('debug', true);

function connect() {
    mongoose.connect(
        // 请修改你的数据库连接
        `mongodb://${process.env.DB_CONN || 'localhost:27017/helloWorld'}`,
        { useNewUrlParser: true },
        err => {
            if (err) {
                throw err;
            }
            logger.info('Successfully connected to database!!!');
        },
    );
}

export default connect;
