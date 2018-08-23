import C from '../constants'
import resultsListReducer from '../reducers/resultsList'

describe('resultsListReducer reducer', () => {

    it('should handle CHANGE_GIFS', () => {
        expect(
            resultsListReducer([
                {
                    images: {
                        preview_gif: {
                            url: "https://media3.giphy.com/media/Mdf5yBfAciSGc/giphy-preview.gif"
                        }
                    }
                }
            ], {
                    type: C.CHANGE_GIFS,
                    payload:
                    {
                        images: {
                            preview_gif: {
                                url: "https://media1.giphy.com/media/ZhuxaRxq9HwQM/giphy-preview.gif"
                            }
                        }
                    }
                })
        ).toEqual(
            {
                images: {
                    preview_gif: {
                        url: "https://media1.giphy.com/media/ZhuxaRxq9HwQM/giphy-preview.gif"
                    }
                }
            }
        )
    })

    it('should handle CLEAR_GIFS', () => {
        expect(
            resultsListReducer([
                {
                    images: {
                        preview_gif: {
                            url: "https://media3.giphy.com/media/Mdf5yBfAciSGc/giphy-preview.gif"
                        }
                    }
                }
            ], {
                    type: C.CLEAR_GIFS
                })
        ).toEqual([])
    })

})