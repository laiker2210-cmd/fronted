import React from "react";
import MatrixMessage from "./MatrixMessage";

class Apppp extends React.Component {
    constructor(props) {
        super(props);

        this.text = [
            'Проснись, Нео...',
            'Ты увяз в Матрице...',
            'Следуй за белым кроликом.',
            'Тук, тук, Нео.',
        ];

        this.nextTimer = null;

        this.state = {
            currentIndex: 0,
            isVisible: true,
        };

        this.handleHide = () => {
            const nextIndex = this.state.currentIndex + 1;

            this.setState({
                isVisible: false,
            });

            if (nextIndex < this.text.length) {
                this.nextTimer = setTimeout(() => {
                    this.setState({
                        currentIndex: nextIndex,
                        isVisible: true,
                    });
                }, 2000);
            }
        };
    }

    componentWillUnmount() {
        clearTimeout(this.nextTimer);
    }

    render() {
        const { currentIndex, isVisible } = this.state;

        return (
            <div className="matrix-screen">
                <div className="matrix-console">
                    <div className="matrix-line">
                        {isVisible && (
                            <MatrixMessage
                                key={currentIndex}
                                text={this.text[currentIndex]}
                                onHide={this.handleHide}
                            />
                        )}

                        <span className="matrix-cursor"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Apppp;