import React from 'react';
const requireAll = (requireContext) => { requireContext.keys().forEach(requireContext) }
try { requireAll(require.context('../constant/icons', true, /\.svg$/)); } catch (error) { console.log(error); }



const Component = (props) => {
    const { _className, data_cy } = props
    return (
        <svg className={_className ? `${_className}` : 'icon'} data-cy={data_cy ? data_cy : ''}>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </svg >
    )
}

export default Component;