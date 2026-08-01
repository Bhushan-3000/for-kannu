function Background() {

    const hearts = Array.from({ length: 20 });

    const stars = Array.from({ length: 80 });

    return (
        <>
            <div className="background">

                {stars.map((_, i) => (
                    <span
                        key={i}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 4}s`
                        }}
                    />
                ))}

                {hearts.map((_, i) => (
                    <span
                        key={"h" + i}
                        className="heart"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 12}s`,
                            animationDuration: `${10 + Math.random() * 8}s`
                        }}
                    >
                        ❤️
                    </span>
                ))}

            </div>
        </>
    );

}

export default Background;