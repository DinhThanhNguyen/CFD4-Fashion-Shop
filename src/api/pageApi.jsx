

const pageApi = {
    contact: (form) => {
        return new Promise((resolve, reject) => {
            resolve({
                success: true
            })
            reject({
                error: 'Hệ thống hiện đang quá tải. Vui lòng thử lại sau!'
            })
        })
    }
}

export default pageApi