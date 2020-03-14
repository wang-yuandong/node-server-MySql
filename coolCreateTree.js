const value = [
    {
        "id": "01e63f2233a4254aa9d8",
        "name": "第三章",
        "parentId": "8f17b965036cc94ce1a8",
        "createTime": "2018-12-11T15:31:13.000Z",
        "updateTime": "2018-12-11T15:31:13.000Z",
        "logicDetele": 1
    },
    {
        "id": "14a307d68e81a94d350a",
        "name": "第四章",
        "parentId": "8f17b965036cc94ce1a8",
        "createTime": "2018-12-11T15:31:19.000Z",
        "updateTime": "2018-12-11T15:31:19.000Z",
        "logicDetele": 1
    },
    {
        "id": "355a1edeb6d49e4423b8",
        "name": "test-a",
        "parentId": "7e325f16a0a3624cb498",
        "createTime": "2018-12-11T15:11:11.000Z",
        "updateTime": "2018-12-11T15:11:11.000Z",
        "logicDetele": 1
    },
    {
        "id": "4a92a3362f0b6a40e6c8",
        "name": "test-c",
        "parentId": "7e325f16a0a3624cb498",
        "createTime": "2018-12-11T15:11:19.000Z",
        "updateTime": "2018-12-11T15:11:19.000Z",
        "logicDetele": 1
    },
    {
        "id": "5932cc8da3b325431c9a",
        "name": "书2",
        "parentId": "6ac86cd0acf0d141a57b",
        "createTime": "2018-12-11T14:42:12.000Z",
        "updateTime": "2018-12-11T14:42:12.000Z",
        "logicDetele": 1
    },
    {
        "id": "6ac86cd0acf0d141a57b",
        "name": "读书笔记",
        "parentId": "-1",
        "createTime": "2018-12-08T12:28:54.000Z",
        "updateTime": "2018-12-08T12:28:54.000Z",
        "logicDetele": 1
    },
    {
        "id": "79fb5615d36c174b0b38",
        "name": "第二章",
        "parentId": "8f17b965036cc94ce1a8",
        "createTime": "2018-12-11T15:31:07.000Z",
        "updateTime": "2018-12-11T15:31:07.000Z",
        "logicDetele": 1
    },
    {
        "id": "7d448547f0bca74e7ada",
        "name": "第一章",
        "parentId": "8f17b965036cc94ce1a8",
        "createTime": "2018-12-11T15:31:01.000Z",
        "updateTime": "2018-12-11T15:31:01.000Z",
        "logicDetele": 1
    },
    {
        "id": "7e325f16a0a3624cb498",
        "name": "test",
        "parentId": "-1",
        "createTime": "2018-12-10T14:02:25.000Z",
        "updateTime": "2018-12-10T14:02:25.000Z",
        "logicDetele": 1
    },
    {
        "id": "82e16a0516c9004c26c8",
        "name": "第六章",
        "parentId": "8f17b965036cc94ce1a8",
        "createTime": "2018-12-11T15:31:29.000Z",
        "updateTime": "2018-12-11T15:31:29.000Z",
        "logicDetele": 1
    },
    {
        "id": "8f17b965036cc94ce1a8",
        "name": "数据结构与算法——JavaScript实现",
        "parentId": "6ac86cd0acf0d141a57b",
        "createTime": "2018-12-10T14:43:41.000Z",
        "updateTime": "2018-12-10T14:43:41.000Z",
        "logicDetele": 1
    },
    {
        "id": "928ada960fe127491f98",
        "name": "书1",
        "parentId": "6ac86cd0acf0d141a57b",
        "createTime": "2018-12-11T14:42:08.000Z",
        "updateTime": "2018-12-11T14:42:08.000Z",
        "logicDetele": 1
    },
    {
        "id": "a32729165eee9a4a67d8",
        "name": "test-b",
        "parentId": "7e325f16a0a3624cb498",
        "createTime": "2018-12-11T15:11:14.000Z",
        "updateTime": "2018-12-11T15:11:14.000Z",
        "logicDetele": 1
    },
    {
        "id": "b6e8cb61ba2c5a42c34b",
        "name": "书3",
        "parentId": "6ac86cd0acf0d141a57b",
        "createTime": "2018-12-11T14:42:16.000Z",
        "updateTime": "2018-12-11T14:42:16.000Z",
        "logicDetele": 1
    },
    {
        "id": "d47155fe9834ae4a24b9",
        "name": "第五章",
        "parentId": "8f17b965036cc94ce1a8",
        "createTime": "2018-12-11T15:31:24.000Z",
        "updateTime": "2018-12-11T15:31:24.000Z",
        "logicDetele": 1
    }
];

function coolCreateTree(arr, parentIdName, idName, globalParentId) {
    const value = JSON.parse(JSON.stringify(arr));
    const coolCreateTreeMap = new Map();
    for (let i = 0; i < value.length; i++) {
        const parentId = value[i][parentIdName];
        if (coolCreateTreeMap.has(parentId)) {
            coolCreateTreeMap.get(parentId).push(value[i])
        } else {
            coolCreateTreeMap.set(parentId, [value[i]])
        }
    }

    function f(arr) {
        for (let i = 0; i < arr.length; i++) {
            const id = arr[i][idName];
            if (coolCreateTreeMap.has(id)) {
                arr[i]['children'] = coolCreateTreeMap.get(id);
                f(coolCreateTreeMap.get(id))
            }
        }
        return arr;
    }


    return f(coolCreateTreeMap.get(globalParentId))
}

