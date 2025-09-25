const disallowedNodeName = ['style', 'script', 'noscript', 'input', 'textarea'];

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_end',
  main() {
    console.log('Hello content.');

    const mutationObserver = new MutationObserver((entries) => {
      entries.forEach((entry) => {
        entry.addedNodes.forEach((node) => {
          const textNodes = textNodesUnder(node);
          textNodes.forEach((textNode) => {
            textNode.textContent = textNode.textContent?.toUpperCase() || '';
          });
        });
        entry.removedNodes.forEach((node) => {});
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    function textNodesUnder(root: Node) {
      const children = [];
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        (node) => {
          const parentElement = node.parentElement;

          if (!parentElement) {
            return NodeFilter.FILTER_REJECT;
          }

          if (
            disallowedNodeName.includes(parentElement.nodeName.toLowerCase())
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          if (parentElement.isContentEditable) {
            return NodeFilter.FILTER_REJECT;
          }

          if (!node.textContent?.trim().length) {
            return NodeFilter.FILTER_SKIP;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      );

      while (walker.nextNode()) {
        children.push(walker.currentNode);
      }

      return children;
    }

    const textNodes = textNodesUnder(document.body);

    textNodes.forEach((node) => {
      node.textContent = node.textContent?.toUpperCase() || '';
    });

    console.log(textNodes);
  },
});
