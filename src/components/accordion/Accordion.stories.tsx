import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'  // устаревший метод, но он позволяет выводить сработку колбеков на панель Сториз

import {Accordion} from './Accordion';
import React, {useState} from 'react';
import {baseItems} from '../../App';

// более подробно будет рассмотрено на 6 спринте
const meta: Meta<typeof Accordion> = { // ЕСЛИ ПРОСТО, ТО МЕТАДАННЫЕ - ЭТО ДАННЫЕ О ДАННЫХ
    title: 'Accordion',
    component: Accordion
};
export default meta;

// export default { // упрощенный вариант. пока будем использовать его
//     component: accordion,
// }

const onChangeHandler = action('onchange') // получается аналог консоли, но в экшинах у СТОРИЗ
const onClickHandler = action('onclick')

// пока привыкаем делать сториз как компоненты

export const CollapsedAccordion = () => {
    return <Accordion title={' Collapsed '}
                      collapsed={true}
                      setCollapsed={onChangeHandler}
                      items={baseItems}
                      onClick={onClickHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion title={' Opened '}
                      collapsed={false}
                      setCollapsed={onChangeHandler}
                      items={baseItems}
                      onClick={onClickHandler}
    />
}

export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState(false); // можно добавлять стэйт, чтобы компонента работала полностью
    return <Accordion title={collapsed ? 'COLLAPSED' : 'OPENED'}
                      collapsed={collapsed}
                      setCollapsed={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={baseItems}
                      onClick={onClickHandler}
    />
}


type Story = StoryObj<typeof Accordion>; // более подробно будет рассмотрено на 6 спринте
export const AccordionStory: Story = {
    args: { //просто задаем аргументы, а Сториз отрисовывает по ним компоненту. изменение состояний на панели Контролз
        title: ' Collapsed ',
        collapsed: false,
        setCollapsed: onChangeHandler,
        items: baseItems,
        onClick: onClickHandler
    },
}