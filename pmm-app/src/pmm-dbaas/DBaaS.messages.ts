export const Messages = {
  tabs: {
    manageDB: 'Manage DB Cluster',
    kubernetes: 'Kubernetes Cluster Inventory',
  },
  kubernetes: {
    deleteAction: 'Delete',
    addAction: 'Add new Kubernetes Cluster',
    deleteModal: {
      cancel: 'Cancel',
      confirm: 'Proceed',
      confirmMessage: 'Are you sure that you want to permanently delete this cluster?',
      title: 'Confirm action'
    },
    deleteSuccess: 'Cluster successfully deleted',
    addModal: {
      title: 'Add Kubernetes cluster',
      confirm: 'Add',
      fields: {
        clusterName: 'Kubernetes Cluster Name',
        kubeConfig: 'Kubeconfig file'
      },
    },
    table: {
      nameColumn: 'Kubernetes Cluster Name',
      actionsColumn: 'Actions'
    },
    messages: {
      clusterAdded: 'Cluster was successfully added',
    }
  }
};
