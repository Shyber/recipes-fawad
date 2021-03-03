import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Modal from '@material-ui/core/Modal';
import Drawer from '@material-ui/core/Drawer';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const emptyFunc = () => {};
    const [modal, setModal] = useState({
        isOpen: false,
        component: null,
        onClose: () => {}
    });
    const [snack, setSnack] = useState({ isOpen: false, message: '' });
    const [drawer, setDrawer] = useState({
        isOpen: false,
        component: null,
        onClose: () => {}
    });

    const showSnackbar = (message, { position } = {}) => {
        setSnack(
            Object.assign({}, snack, {
                isOpen: message && message !== '',
                position: position || 'center',
                message
            })
        );
    };

    const hideSnackbar = () => {
        setSnack(
            Object.assign({}, snack, {
                isOpen: false,
                message: ''
            })
        );
    };

    const showModal = (
        component,
        {
            onClose
        } = {}
    ) => {
      
        setModal(
            Object.assign({}, modal, {
                onClose: onClose || emptyFunc
            })
        );
    };

    const hideModal = bCallOnClose => {
        if (bCallOnClose && modal.onClose) {
            modal.onClose();
        }
        setModal(
            Object.assign({}, modal, {
                isOpen: false,
                component: null,
                onClose: () => {}
            })
        );
    };

    const blockModal = isBlocked => {
        setModal(
            Object.assign({}, modal, {
                isBlocked
            })
        );
    };

    const showDrawer = (component, onClose) => {
        setDrawer(
            Object.assign({}, drawer, {
                isOpen: component && true,
                component,
                onClose: onClose || emptyFunc
            })
        );
    };

    const hideDrawer = () => {
        setDrawer(
            Object.assign({}, drawer, {
                isOpen: false,
                onClose: () => {}
            })
        );
    };

    const contextProviderValue = useMemo(() => {
        return {
            showSnackbar,
            showModal,
            hideModal,
            showDrawer,
            hideDrawer,
            blockModal
        };
    }, [showSnackbar, showModal, hideModal, showDrawer, hideDrawer, blockModal]);
    return (
        <FeedbackContext.Provider value={contextProviderValue}>
            {children}
            <Drawer
                style={{ zIndex: 11000 }}
                open={drawer.isOpen}
                anchor="right"
                onClose={() => {
                    hideDrawer();
                    drawer.onClose();
                }}
            >
                {drawer.component}
            </Drawer>
            {modal.isOpen && (
                <Modal
                    bgColor={modal.bgColor}
                    showCloseButton={modal.showClose}
                    maxWidth={modal.maxWidth}
                    isOpen={modal.isOpen}
                    onClose={() => {
                        hideModal();
                        modal.onClose();
                    }}
                    isBlocking={modal.isBlocking}
                    fullScreen={modal.fullScreen}
                    fullWidth={modal.fullWidth}
                    isSimpleCloseButton={modal.isSimpleClose}
                    isBlocked={modal.isBlocked}
                >
                    {modal.component}
                </Modal>
            )}

            {snack.isOpen && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: snack.position
                    }}
                    open={snack.isOpen}
                    message={snack.message}
                    onClose={hideSnackbar}
                />
            )}
        </FeedbackContext.Provider>
    );
};

FeedbackProvider.propTypes = {
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.any
};
