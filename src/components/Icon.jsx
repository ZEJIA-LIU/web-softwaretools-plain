import React from 'react';
const requireAll = (requireContext) => { requireContext.keys().forEach(requireContext) }
try { requireAll(require.context('../constant/icons', true, /\.svg$/)); } catch (error) { console.log(error); }



const Component = (props) => {
    const { _className } = props
    return (
        <svg className={_className ? `${_className}` : 'icon'}>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </svg>
    )
}

export default Component;