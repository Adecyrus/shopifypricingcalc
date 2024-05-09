function calculate() {
  const avgOrderValue = parseFloat(document.getElementById('avg-order-value').value);
  const numOrders = parseInt(document.getElementById('num-orders').value);

  const basicShopifyFee = 0.049 * (avgOrderValue * numOrders) + (0.30 * numOrders) + 39;
  const shopifyFee = 0.036 * (avgOrderValue * numOrders) + (0.30 * numOrders) + 105;
  const shopifyAdvancedFee = 0.029 * (avgOrderValue * numOrders) + (0.30 * numOrders) + 399;

  const results = `
    <table>
      <tr class="highlighted">
        <th colspan="8">Shopify Basic</th>
      </tr>
      <tr>
        <td>Avg Order Value</td>
        <td>${avgOrderValue}</td>
        <td>Orders/Month</td>
        <td>${numOrders}</td>
      </tr>
      <tr>
        <td>Listing Fee</td>
        <td>$0</td>
        <td>Transaction Fee</td>
        <td>2%</td>
      </tr>
      <tr>
        <td>Credit Card Fee</td>
        <td>2.9%</td>
        <td>Fee per Order</td>
        <td>$0.30</td>
      </tr>
      <tr>
        <td>Monthly Fee</td>
        <td>$39</td>
        <td class="highlighted">Total Fees/Month</td>
        <td class="highlighted">$${basicShopifyFee}</td>
      </tr>
      <tr class="highlighted">
        <th colspan="8">Shopify</th>
      </tr>
      <tr>
        <td>Avg Order Value</td>
        <td>${avgOrderValue}</td>
        <td>Orders/Month</td>
        <td>${numOrders}</td>
      </tr>
      <tr>
        <td>Listing Fee</td>
        <td>$0</td>
        <td>Transaction Fee</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>Credit Card Fee</td>
        <td>2.6%</td>
        <td>Fee per Order</td>
        <td>$0.30</td>
      </tr>
      <tr>
        <td>Monthly Fee</td>
        <td>$105</td>
        <td class="highlighted">Total Fees/Month</td>
        <td class="highlighted">$${shopifyFee}</td>
      </tr>
      <tr class="highlighted">
        <th colspan="8">Shopify Advanced</th>
      </tr>
      <tr>
        <td>Average Order Value</td>
        <td>${avgOrderValue}</td>
        <td>Orders/Month</td>
        <td>${numOrders}</td>
      </tr>
      <tr>
        <td>Listing Fee</td>
        <td>$0</td>
        <td>Transaction Fee</td>
        <td>0.5%</td>
      </tr>
      <tr>
        <td>Credit Card Fee</td>
        <td>2.4%</td>
        <td>Fee per Order</td>
        <td>$0.30</td>
      </tr>
      <tr>
        <td>Monthly Fee</td>
        <td>$399</td>
        <td class="highlighted">Total Fees/Month</td>
        <td class="highlighted">$${shopifyAdvancedFee}</td>
      </tr>
    </table>
  `;

  document.getElementById('results').innerHTML = results;
}