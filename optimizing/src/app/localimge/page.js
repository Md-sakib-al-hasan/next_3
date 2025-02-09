import Image from 'next/image'
import mountains from '@/../public/imge/leave_image.jpg'

export default function Background() {
    return (
        <div
            style={{
                display: 'grid',
                gridGap: '8px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))',
            }}
        >
            <div style={{ position: 'relative', height: '400px' }}>
                <Image
                    alt="Mountains"
                    src={mountains}
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                />
            </div>
            {/* And more images in the grid... */}
        </div>
    )
}