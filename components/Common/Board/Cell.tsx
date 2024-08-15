import { Player } from '@/enums/Game';
import Game from '@/types/Game';
import { TbCircle, TbX } from 'react-icons/tb';

type CellProps = {
    value: Game.Player | null;
};

export default function Cell({ value }: CellProps) {
    if (!value) {
        return <div className="h-[5rem] w-[5rem]" />;
    }

    return value === Player.X ? (
        <TbX
            size="5rem"
            color="#FF3131"
        />
    ) : (
        <TbCircle
            size="5rem"
            color="#4D4DFF"
        />
    );
}
