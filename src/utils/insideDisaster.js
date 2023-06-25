

export const getIsPointInsidePolygon = (point, vertices) => {
    const x = point[0]
    const y = point[1]
    
    let inside = false
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      const xi = vertices[i][0],
        yi = vertices[i][1]
      const xj = vertices[j][0],
        yj = vertices[j][1]
    
      const intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }
    
    return inside
    }